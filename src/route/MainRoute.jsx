import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import HomePage from '../page/HomePage';
import LoginPage from '../page/LoginPage';
import ProfilePage from '../page/ProfilePage';
import NotMatchPage from '../page/NotMatchPage';

const MainRoute = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/profile' component={ProfilePage} />
                <Route path='/category/:category' component={HomePage} />
                <Route component={NotMatchPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute