import { useContext } from 'react';
import { AuthProvider } from './auth.provider';
import { Auth } from './auth.types';

export const useAuth = () => useContext<Auth>(AuthProvider);
