import api from "../api";
import { routesApi } from 'src/utils/routesApi';
import { ISpecialistCreateResponseDto } from './dtos/specialistCreateResponse.dto'; 
import { ISpecialistPropsDto } from './dtos/specialistProps.dto';

export async function fetchSpecialistCreate({ name, email, password, confirmpassword, crp, approach, phone }: ISpecialistPropsDto): Promise<ISpecialistCreateResponseDto> {
    const url = routesApi.specialist;
    const payload = { name, email, password, confirmpassword, crp, approach, phone };
    const { data/*, status*/ } = await api.post(url, payload);
    return data 
}

