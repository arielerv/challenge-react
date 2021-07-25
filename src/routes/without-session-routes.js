import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';

const Login = lazy(() => import('pages/Login'));

const WithoutSessionRoutes = () => (
  <Suspense fallback={<div />}>
    <Switch>
      <Route component={Login} />
    </Switch>
  </Suspense>
);

export default WithoutSessionRoutes;
