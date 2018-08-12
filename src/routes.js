import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App.js';


export default(
    <Route path="/" component={App}>
        {/* <IndexRoute component={LandingPage}/>
        <Route path="login" component={LoginPage}/> */}
    </Route>
)