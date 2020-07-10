import React from 'react';
import {BrowserRouter, Switch, Router, Route} from "react-router-dom";

import { About } from './About';
import { Repos } from './Repos';
import { Home } from './Home';

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/repos' component={Repos} />
            <Route path='/about' component={About} />
        </Switch>
    </BrowserRouter>
);
