import { React,useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound';

const Main = props => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound} />
            </Switch>
        </>
    )
};
export default Main;
