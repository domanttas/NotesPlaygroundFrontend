import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/Dashboard/Dashboard';

const app = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Layout>
  );
};

export default app;
