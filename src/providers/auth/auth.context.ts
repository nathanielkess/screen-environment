import React, from 'react';
import { Authentication } from '../../models/authentication';
import { Auth } from './auth.types';

export const AuthContext = React.createContext<Auth>({
  status: Authentication.UNATHENTICATED,
  setStatus: () => {}
});
