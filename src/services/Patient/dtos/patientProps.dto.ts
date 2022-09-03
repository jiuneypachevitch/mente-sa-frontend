/*
 * Nome
 * Data de nascimento
 * CPF
 * Genero
 * Enredeco
 * Cidade
 * Estado
 * Email
 * Telefone
 *
 * */
export interface IPatientPropsDto {
    specialistid?: string | null;
    name: string;
    email: string;
    cpf: string;
    birthday: string;
    gender: string;
    address: string;
    city: string;
    state: string;
    phone: string;
}
