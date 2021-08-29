import React from 'react';
import { useAuth } from '../providers/auth/useAuth';

export const Login = () => {
  const { status, setStatus } = useAuth();

  const handleChange = ({ target }) => {
    const val = +target.value;
    const authStatus = target.checked ? val : val === 2 ? 1 : 0;
    setStatus(authStatus);
  };

  return (
    <div id="authenticator">
      <label>
        <input
          type="checkbox"
          id="authenticated"
          name="authenticated"
          onChange={handleChange}
          checked={status === 1 || status === 2}
          value="1"
        />
        Authenticated
      </label>
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          id="verified"
          name="verified"
          checked={status === 2}
          value="2"
        />
        Verified
      </label>
    </div>
  );
};
