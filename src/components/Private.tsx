import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../contexts/userContext.js';
import { PrivateProps } from '../types/componentsTypes.js';

export function Private(props: PrivateProps): JSX.Element {
  const { user } = useContext(UserContext);

  if (!user.token) {
    return <Navigate to="/login" />;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
}
