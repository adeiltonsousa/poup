import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splash from '../components/Splash';
import Login from '../components/Login';
import Home from '../components/Home';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Splash} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
            </Switch>    
        </BrowserRouter>
    )
};