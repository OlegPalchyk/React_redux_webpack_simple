import React, {Component} from "react";
import {Provider} from "react-redux";
/////////////////////////////////////////////////////////////////////////
// browserHistory would be preferred over hashHistory, but browserHistory
// would require configuring the server. So we will use hashHistory here.
// Please change to browserHistory if you have your own backend server.
// import {browserHistory as history} from 'react-router';
import {Router, Route, Redirect, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import {createHashHistory} from "history";
import configureStore from "./store/store";
import "./styles/base.css";
// export const history = useRouterHistory(createHashHistory)();
//////////////////////////////////////////////////////////////////////////

let store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
import Home from "./containers/home/Home";
import Page_two from "./containers/page2/Page_Two";



export default class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return  (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/home" component={Home}/>
                    <Route path="/page2" component={Page_two} />
                    <Redirect from='*' to='/home' />
                </Router>
            </Provider>
        )
    }
}