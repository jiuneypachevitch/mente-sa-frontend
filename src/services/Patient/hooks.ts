import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IPatientPropsDto } from './dtos/patientProps.dto';
import { fetchPatientCreate } from "./service";
import { IPatientCreateResponseDto } from "./dtos/patientCreateResponse.dto";

export function useSpecialistCreate({ specialistid, name, email, cpf, birthday, gender, address, city, state, phone }: IPatientPropsDto): UseQueryResult<IPatientCreateResponseDto> {
    //debugger;
    const queryKey = ['patientCreate']

    return useQuery(queryKey, () => fetchPatientCreate({ specialistid, name, email, cpf, birthday, gender, address, city, state, phone }), {
        keepPreviousData: true,
    });
}


// export function useUserRefreshToken(email: string, refreshToken:string):UseQueryResult<RefreshTokenResponse>{
//     const queryKey = ['userRefreshtoken']

//     return useQuery(queryKey, () => fetchRefreshToken(email, refreshToken),{
//         keepPreviousData: true,
//     } );
// }
/*import { useQuery, UseQueryResult } from  '@tanstack/react-query';


import { UserResponseDto } from './dtos/UserResponse.dto';
import { fetchUserList, fetchUserById } from './service';


export function useUserList(): UseQueryResult<UserResponseDto[]> {
    const queryKey = ['userList'];
    return useQuery(queryKey, () => fetchUserList(), {
      keepPreviousData: true,
    });
  }


  export function useUserById(id: string): UseQueryResult<UserResponseDto> {
    const queryKey = ['userById'];
    return useQuery(queryKey, () => fetchUserById(id), {
      keepPreviousData: true,
    });
  }
*/

/*  export function useCharacterList(): UseQueryResult<Characters> {
    const queryKey = ['getCharacterList'];
    return useQuery(queryKey, () => fetchCharacterList(), {
      keepPreviousData: true,
    });
  }*/
