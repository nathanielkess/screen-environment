import React, { FC, Fragment, useState } from 'react';
import { CountDownCampaign } from '../../campaigns/count-down-campaign';
import { ScreenEnvironment, AuthStatus } from '../../libs/screen-environment';
import { Criteria } from '../components/criteria';
import { Authentication } from '../models/authentication';
import { useAuth } from '../providers/auth/useAuth';

export const Campaign1: FC = () => {
  const { status, setStatus } = useAuth();

  /**
   * Mapping of the internal Authentication status
   * to the lib ScreenEnvironment's auth config
   */
  const auth = new Map<Authentication, AuthStatus>([
    [Authentication.AUTHENTICATED, 'unverified'],
    [Authentication.UNATHENTICATED, 'unauthenticated'],
    [Authentication.VERIFIED, 'verified']
  ]);

  return (
    <Fragment>
      <Criteria>
        <ul>
          <li>No conditions</li>
        </ul>
      </Criteria>
      <ScreenEnvironment
        environmentType="mobileApp"
        authStatus={auth.get(status)}
      >
        <CountDownCampaign />
      </ScreenEnvironment>
    </Fragment>
  );
};
