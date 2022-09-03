import api from '../api';
import { IRefreshTokenResponse } from './dtos/refreshTokenResponse.dto';
import { IAuthResponseDto } from './dtos/authResponse.dto';
import { routesApi } from 'src/utils/routesApi';

export interface ILoginProps{
    email: string,
    password: string
}

export const TOKEN_KEY = "@menteSa-Token";
export const REFRESH_TOKEN = "@menteSa-RefreshTokem";
export const USER_EMAIL = "@menteSa-UserEmail";
export const USER_ID = "@menteSa-UserId";
export const USER_NAME = "@menteSa-UserName";


export async function fetchUserLogin({ email, password }: ILoginProps): Promise<IAuthResponseDto> {
    const url = routesApi.login; 
    const payload = { email, password };
    const { data, status } = await api.post(url, payload);
    console.log("Data:", data);
    if(status === 200){
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token.accessToken))
        localStorage.setItem(REFRESH_TOKEN, JSON.stringify(data.token.refreshToken))
        localStorage.setItem(USER_EMAIL, JSON.stringify(data.user.email))
        localStorage.setItem(USER_ID, JSON.stringify(data.user.id))
        localStorage.setItem(USER_NAME, JSON.stringify(data.user.name))
    }
    return data 
}

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const getUserEmail = () => localStorage.getItem(USER_EMAIL);
export const getUserId = () => localStorage.getItem(USER_ID);
export const getUserName = () => localStorage.getItem(USER_NAME);

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(USER_EMAIL);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_NAME);
};


export async function fetchRefreshToken(email: string, refreshToken: string): Promise<IRefreshTokenResponse>{

    const url = 'auth/refresh-token'

    const payload = { email, refreshToken}

    const { data, status } = await api.post(url, payload);

    if( status === 200){
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data.accessToken))
        localStorage.setItem(REFRESH_TOKEN, JSON.stringify(data.refreshToken))
    }
    return data
}
