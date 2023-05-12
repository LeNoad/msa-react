import { IUser } from "../cmm/store";

export const LoginAction = (accessToken:string, refreshToken:string, user:IUser) => ({
    type: 'LOGIN',
    payload: { accessToken, refreshToken, user },
});