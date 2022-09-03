import api from "../api";
import { IPatientCreateResponseDto } from './dtos/patientCreateResponse.dto'; 
import { IPatientPropsDto } from './dtos/patientProps.dto';
import { routesApi } from 'src/utils/routesApi';

/*import { UserResponseDto } from "./dtos/UserResponse.dto";

export async function fetchUserList(): Promise<UserResponseDto[]> {
    const url = 'v1/users';
    const { data } = await api.get(url);
    return data;
  }

  export async function fetchUserById(id: string): Promise<UserResponseDto> {
    const url = `v1/users/${id}`;
    const { data } = await api.get(url);
    return data;
  }
*/

export async function fetchPatientCreate({ specialistid, name, email, cpf, birthday, gender, address, city, state, phone }: IPatientPropsDto): Promise<IPatientCreateResponseDto> {
    const url = routesApi.patient;
    const payload = { specialistid, name, email, cpf, birthday, gender, address, city, state, phone };
    const { data/*, status*/ } = await api.post(url, payload);
    return data 
}

