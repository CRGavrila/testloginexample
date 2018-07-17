import React from 'react';
import { Switch, Route } from 'react-router-dom';
import   LandingPage   from './components/LandingPage';
import   Chatbots   from './components/Chatbots';

import Layout from './hoc/layout';
    
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component= { LandingPage } />
                <Route path="/chatbots" exact component= { Chatbots } />
            </Switch>
        </Layout>
    );
};

export default Routes;