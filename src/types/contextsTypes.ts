import { Dispatch, SetStateAction } from 'react';

export type UserSignUp = {
  alias: string;
  name: string;
  email: string;
  password: string;
};

export type UserSignIn = {
  indentifier: string;
  password: string;
};

export type UserLog = {
  alias: string | null;
  name: string | null;
  email: string | null;
  token: string | null;
};

export type UserContextType = {
  setUser: Dispatch<SetStateAction<UserLog>>;
  user: UserLog;
};
export type LoadingType = boolean;

export type LoadingTypeContext = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
