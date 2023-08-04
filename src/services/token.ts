import { AUTH_TOKEN_KEY } from '../const';

export type Token = string;

export const setToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return token ?? '';
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};
