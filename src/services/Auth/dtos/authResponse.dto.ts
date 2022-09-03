export interface IToken {
    tokenType: string
    accessToken: string
    refreshToken: string
    expiresIn: string
}
  
export interface IUser {
    id: string
    name: string
    email: string
    role: string
    createdAt: string
}

export interface IAuthResponseDto {
    token: IToken
    user: IUser
}
