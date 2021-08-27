import React, { FC, Fragment } from 'react';
import { CountDownCampaign } from '../../libs/count-down-compaign';
import { ScreenEnvironment, AuthStatus } from '../../libs/screen-environment';

export const Campaign: FC = () => {
  return (
    <ScreenEnvironment environmentType="mobileApp" authStatus="verified">
      {() => <CountDownCampaign />}
    </ScreenEnvironment>
  );
};
