import React, {
  FC,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useMemo
} from 'react';

export type AuthStatus = 'unauthenticated' | 'verified' | 'unverified';
export type ApplicationEnvironments = 'web' | 'mobileApp';

type RenderProps = {
  isVerified: boolean;
  isAuthenticated: boolean;
  authStatus: AuthStatus;
  isMobile: boolean;
  isWeb: boolean;
};

type JsxFunc = (props: RenderProps) => JSX.Element;

type RNode =
  | JsxFunc
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children?: RNode;
  authStatus: AuthStatus;
  onAuthStatusChange?: (status: AuthStatus) => void;
  environmentType: ApplicationEnvironments;
};

export const ScreenEnvironment: FC<Props> = ({
  children,
  authStatus,
  environmentType,
  onAuthStatusChange
}) => {
  const { isAuthenticated, isVerified } = useMemo(() => {
    return {
      isAuthenticated: authStatus !== 'unauthenticated',
      isVerified: authStatus === 'verified',
      authStatus: authStatus
    };
  }, [authStatus]);

  const { isMobile, isWeb } = useMemo(() => {
    return {
      isMobile: environmentType === 'mobileApp',
      isWeb: environmentType == 'web'
    };
  }, [environmentType]);

  return typeof children === 'function'
    ? children({ isVerified, isAuthenticated, authStatus, isMobile, isWeb })
    : children;
};
