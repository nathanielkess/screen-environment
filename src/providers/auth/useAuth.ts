import { useContext } from 'react';
import { AuthContext } from './auth.context';
import { Auth } from './auth.types';

export const useAuth = () => useContext<Auth>(AuthContext);
