import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ISpecialistPropsDto } from './dtos/specialistProps.dto';
import { fetchSpecialistCreate } from "./service";
import { ISpecialistCreateResponseDto } from "./dtos/specialistCreateResponse.dto";

export function useSpecialistCreate({ name, email, password, confirmpassword, crp, approach, phone }: ISpecialistPropsDto): UseQueryResult<ISpecialistCreateResponseDto> {
    //debugger;
    const queryKey = ['specialistCreate']

    return useQuery(queryKey, () => fetchSpecialistCreate({ name, email, password, confirmpassword, crp, approach, phone }), {
        keepPreviousData: true,
    });
}


// export function useUserRefreshToken(email: string, refreshToken:string):UseQueryResult<RefreshTokenResponse>{
//     const queryKey = ['userRefreshtoken']

//     return useQuery(queryKey, () => fetchRefreshToken(email, refreshToken),{
//         keepPreviousData: true,
//     } );
// }
