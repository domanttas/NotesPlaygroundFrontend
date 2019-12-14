import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';

const app = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
    </Layout>
  );
};

export default app;
