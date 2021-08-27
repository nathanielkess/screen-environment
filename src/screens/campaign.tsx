import React, { FC, Fragment, useState } from 'react';
import { CountDownCampaign } from '../../libs/count-down-compaign';
import { ScreenEnvironment, AuthStatus } from '../../libs/screen-environment';

export const Campaign: FC = () => {
  const [auth, setAuth] = useState<AuthStatus>('unathenticted');

  const handleAuth = () => {
    setAuth('verified');
  };

  return (
    <Fragment>
      <button onClick={handleAuth}>toggle auth</button>
      <ScreenEnvironment environmentType="mobileApp" authStatus={auth}>
        {() => <CountDownCampaign />}
      </ScreenEnvironment>
    </Fragment>
  );
};
