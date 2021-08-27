import React, {
  FC,
  Fragment,
  ReactChild,
  ReactFragment,
  ReactPortal
} from 'react';

export type AuthStatus = 'unathenticted' | 'verified' | 'unverified';
export type ApplicationEnvironments = 'web' | 'mobileApp';

type JsxFunc = () => JSX.Element;

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

type RenderProps = {
  isVerified: boolean;
};

export const ScreenEnvironment: FC<Props> = ({ children }) => {
  return typeof children === 'function' ? children() : children;
};
