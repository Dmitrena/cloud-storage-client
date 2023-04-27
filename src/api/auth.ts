import axios from '@/core/axios';
import { destroyCookie } from 'nookies';
import { AuthDto, LoginFormDto, RegisterFormDto, User } from './dto/auth.dto';

export const login = async (values: LoginFormDto): Promise<AuthDto> => {
  return (await axios.post('auth/login', values)).data;
};

export const register = async (values: RegisterFormDto): Promise<AuthDto> => {
  return (await axios.post('auth/register', values)).data;
};

export const getMe = async (): Promise<User> => {
  return (await axios.get('users/me')).data;
};

export const logout = () => {
  destroyCookie(null, 'access_token', { path: '/' });
};
