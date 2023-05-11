import { useSelector } from "react-redux";

export const Token = () => {
    const accessToken = useSelector((state:any) => state.accessToken);
    const refreshToken = useSelector((state:any) => state.refreshToken);

    return (
        <>
            <div>토큰 : {accessToken}</div>
            <div>갱신토큰 : {refreshToken}</div>
        </>
    );
}
export default Token;