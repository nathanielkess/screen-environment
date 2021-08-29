import React, { FC } from 'react';
import { CountDownCampaign } from '../../campaigns/count-down-campaign';
import { ScreenEnvironment, AuthStatus } from '../../libs/screen-environment';
import { Criteria } from '../components/criteria';
import { Authentication } from '../models/authentication';
import { useAuth } from '../providers/auth/useAuth';
import { useMediaQuery } from 'react-responsive';
import { Screen } from '../components/screen';

export const Campaign4: FC = () => {
  const { status, setStatus } = useAuth();

  const isMobile = useMediaQuery({ query: '(max-width: 520px)' });

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
          <li>Mobile only</li>
        </ul>
      </Criteria>
      <ScreenEnvironment
        environmentType={isMobile ? 'mobileApp' : 'web'}
        authStatus={auth.get(status)}
      >
        {({ isMobile }) =>
          isMobile ? (
            <CountDownCampaign bg="#c85ce0" />
          ) : (
            <p>This campaign is only accessible on a mobile app</p>
          )
        }
      </ScreenEnvironment>
    </Screen>
  );
};
