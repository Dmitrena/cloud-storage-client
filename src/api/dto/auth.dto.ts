export interface LoginFormDto {
  email: string;
  password: string;
}

export interface RegisterFormDto {
  email: string;
  password: string;
  fullName: string;
}

export interface AuthDto {
  access_token: string;
}

export interface User {
  id: number;
  email: string;
  fullName: string;
}
