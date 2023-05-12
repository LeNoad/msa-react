import axios from "axios";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginAction } from "../Action/LoginAction";
import { useSelector } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const onLogin = (userId: string, userPassword: string) => {
    const data = {
      userId: userId,
      userPassword: userPassword,
    }
    axios.post("http://192.168.0.76:8080/api/authorize", data).then((response: any) => {
      const { accessToken, refreshToken, user } = response.data.result.jwtTokenDto;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", user);
      dispatch(LoginAction(accessToken, refreshToken, user));
      navigator("/token")
    })
  }

  return (
    <>
      <button onClick={() => onLogin("test", "123456")}>로그인</button>
    </>
  );
}
export default Login;