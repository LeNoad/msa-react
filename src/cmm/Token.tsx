import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { LogoutAction } from "../Action/LogoutAction";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoginAction } from "../Action/LoginAction";

export const Token = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const accessToken = useSelector((state:any) => state.accessToken);
    const refreshToken = useSelector((state:any) => state.refreshToken);
    const user = useSelector((state:any) => state.user);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        if(accessToken === "") {
            setIsAuthenticated(true);
            navigator("/");
        } else {
            setIsAuthenticated(false);
        }
    }, [])
    const handleLogout = () => {
        dispatch(LogoutAction());
        navigator("/")
    };
    const handleNavigator = () => {
        navigator("/test")
    }
    const handleRefreshToken = () => {
        axios.post("http://192.168.0.76:8080/api/authorizeTokenRefresh", {}, {
            headers: {
                'Authorization' : `bearer ${refreshToken}`
            },
        }).then((response:any) => {
            const { accessToken, refreshToken, user } = response.data.result.jwtTokenDto;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("user", user);
            dispatch(LoginAction(accessToken, refreshToken, user));
            navigator("/token")
        })
    }
    return (
        <div hidden={isAuthenticated}>
            <div>{user.userName} 현재 접속중</div>
            <div>토큰 : {accessToken}</div>
            <div>갱신토큰 : {refreshToken}</div>
            <button onClick={handleLogout}>로그아웃</button>
            <button onClick={handleNavigator}>테스트 API</button>
            <button onClick={handleRefreshToken}>토큰 갱신</button>
        </div>
    );
}
export default Token;