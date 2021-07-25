import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';

import Header from './Header';

const Hero = lazy(() => import('pages/Hero'));
const Home = lazy(() => import('pages/Home'));

const WithSessionRoutes = () => (
  <Suspense fallback={<div />}>
    <Header />
    <Switch>
      <Route exact path="/hero/:heroId" component={Hero} />
      <Route component={Home} />
    </Switch>
  </Suspense>
);

export default WithSessionRoutes;
