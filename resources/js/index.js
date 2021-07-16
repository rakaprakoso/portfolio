import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";
// const BrowserRouter = require("react-router-dom").BrowserRouter;
import Main from './router';
// class Index extends Component {
export const Index = () => {

    return (

        <>
            <Helmet>
                <link id="favicon" rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
            </Helmet>
            <BrowserRouter>
                <Route component={Main} />
            </BrowserRouter>
        </>
    );

}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
