import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { fetchUserLogin } from "./service";
import { IAuthResponseDto } from "./dtos/authResponse.dto";
import { IRefreshTokenResponse } from "./dtos/refreshTokenResponse.dto";


export function useUserLogin(email: string, password:string): UseQueryResult<IAuthResponseDto> {
    //debugger;
    const queryKey = ['userLogin']

    return useQuery(queryKey, () => fetchUserLogin({email, password}), {
        keepPreviousData: true,
    });
}


// export function useUserRefreshToken(email: string, refreshToken:string):UseQueryResult<RefreshTokenResponse>{
//     const queryKey = ['userRefreshtoken']

//     return useQuery(queryKey, () => fetchRefreshToken(email, refreshToken),{
//         keepPreviousData: true,
//     } );
// }
