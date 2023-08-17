import { Email } from '../const';
import { EmailType } from '../types/types';


export const setLocalEmail = (email: EmailType): void => {
  localStorage.setItem(Email, email);
};

export const getLocalEmail = (): EmailType => {
  const email = localStorage.getItem(Email);
  return email ?? '';
};

export const removeLocalEmail = (): void => {
  localStorage.removeItem(Email);
};
