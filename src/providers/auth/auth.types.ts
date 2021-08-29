import { Authentication } from '../../models/authentication';

export type Auth = {
  status: Authentication;
  setStatus: (to: Authentication) => void;
};
