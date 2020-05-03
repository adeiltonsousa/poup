import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splash from '../components/Splash'
import Login from '../components/Login'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Splash} />
                <Route path="/Login" component={Login} />
            </Switch>    
        </BrowserRouter>
    )
};