import React, { FC } from 'react';
import { CountDownCampaign } from '../../campaigns/count-down-campaign';
import { ScreenEnvironment, AuthStatus } from '../../libs/screen-environment';
import { Criteria } from '../components/criteria';
import { Screen } from '../components/screen';
import { Authentication } from '../models/authentication';
import { useAuth } from '../providers/auth/useAuth';

export const Campaign2: FC = () => {
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
    <Screen>
      <Criteria>
        <ul>
          <li>Must be authenticated</li>
        </ul>
      </Criteria>
      <ScreenEnvironment
        environmentType="mobileApp"
        authStatus={auth.get(status)}
      >
        {({ isAuthenticated }) =>
          isAuthenticated ? (
            <CountDownCampaign bg="#4CAF50" />
          ) : (
            <p>Please create an account</p>
          )
        }
      </ScreenEnvironment>
    </Screen>
  );
};
