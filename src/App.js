import React, {Fragment} from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./style";
import {IconStyle} from "./statics/iconfont/iconfont";
import store from "./store";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/detail'} component={Detail}/>
                </Router>
            </Provider>
            <GlobalStyle/>
            <IconStyle/>
        </Fragment>
    );
}

export default App;
