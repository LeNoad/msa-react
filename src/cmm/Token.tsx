import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { LogoutAction } from "./LogoutAction";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Token = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const accessToken = useSelector((state:any) => state.accessToken);
    const refreshToken = useSelector((state:any) => state.refreshToken);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    console.log(accessToken);
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
    return (
        <div hidden={isAuthenticated}>
            <div>토큰 : {accessToken}</div>
            <div>갱신토큰 : {refreshToken}</div>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}
export default Token;