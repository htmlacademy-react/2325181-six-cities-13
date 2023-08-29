import { FormEvent, useRef, useState } from 'react';
import { loginUserAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/hooks';
import styles from './user-authentication.module.css';
import { isPasswordValid } from '../../helper';


export default function UserAuthentication (): JSX.Element {
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null &&
      passwordRef.current !== null &&
      isPasswordValid(passwordRef.current.value)) {
      dispatch(loginUserAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  const [password, setPassword] = useState<string>('');
  return (
    <form className="login__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          ref= {emailRef}
          type="email"
          name="email"
          placeholder="Email"
          required
          data-testid="emailElement"
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          ref={passwordRef}
          onChange={() => setPassword(passwordRef.current?.value ?? '')}
          type="password"
          name="password"
          placeholder="Password"
          required
          data-testid="passwordElement"
        />
        {!isPasswordValid(password) &&
          <div className={styles.passwordNotValid}>Password must contain at least one digit and one letter sign.</div>}
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}
