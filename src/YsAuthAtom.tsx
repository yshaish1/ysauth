import { atom, useRecoilState } from 'recoil';

export interface AuthProps extends User {
  loggedIn: boolean;
  loading?: boolean;
}

export type User = {
  username: string | null;
  token: string | null;
  expire: number | null;
};

const defaultState: AuthProps = {
  loggedIn: false,
  username: null,
  token: null,
  expire: null,
  loading: false,
};

export const AuthState = atom({
  key: 'AuthState',
  default: defaultState,
});

export const useAuthState = () => useRecoilState(AuthState);
