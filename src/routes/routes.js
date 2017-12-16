import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainPageContainer from '../containers/MainPageContainer';

import App from '../containers/App';

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={MainPageContainer} />
      <Route path="homeAgain" component={MainPageContainer} />

    </Route>
  </Route>
);
