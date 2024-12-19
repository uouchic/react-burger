import React from 'react';
import { useSelector } from '../../utils/hook';
import { Navigate, useLocation } from 'react-router-dom';

import Preloader from '../preloader/preloader';
 //@ts-ignore
const Protected = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useSelector(
    (store) => store.userRegister.isAuthChecked
  );

  const user = useSelector((store) => store.userRegister.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
 //@ts-ignore
export const OnlyUnAuth = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);
