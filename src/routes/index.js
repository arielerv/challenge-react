import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {history} from 'store';
import authorizationCreator from 'store/authorization/actions';
import {getIsLoadingToken, getIsRequested, getToken} from 'store/authorization/selectors';

import WithSessionRoutes from './with-session-routes';
import WithoutSessionRoutes from './without-session-routes';

const Routes = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isLoadingToken = useSelector(getIsLoadingToken);
  const isRequested = useSelector(getIsRequested);

  useEffect(() => {
    dispatch(authorizationCreator.authGetTokenRequest());
  }, []);

  const getRoutes = () => (token ? <WithSessionRoutes /> : <WithoutSessionRoutes />);

  return (
    <ConnectedRouter history={history}>
      <div className="layout">
        {!isLoadingToken && isRequested && getRoutes()}
      </div>
    </ConnectedRouter>
  );
};

export default Routes;
