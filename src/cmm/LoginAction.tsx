export const LoginAction = (accessToken:string, refreshToken:string) => ({
    type: 'LOGIN',
    payload: { accessToken, refreshToken },
});