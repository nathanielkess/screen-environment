import React, { useState } from 'react';

export const Login = () => {
  const [authState, setAuthState] = useState(0);

  const handleChange = ({ target }) => {
    const val = +target.value;
    setAuthState(prev => (target.checked ? val : val === 2 ? 1 : 0));
  };

  // const { status, setStatus } = useAuth();

  return (
    <div id="authenticator">
      <label>
        <input
          type="checkbox"
          id="authenticated"
          name="authenticated"
          onChange={handleChange}
          checked={authState === 1 || authState === 2}
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
          checked={authState === 2}
          value="2"
        />
        Verified
      </label>
    </div>
  );
};
