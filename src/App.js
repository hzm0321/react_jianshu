import React, {Fragment} from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./style";
import {IconStyle} from "./statics/iconfont/iconfont";
import store from "./store";
import {Provider} from 'react-redux'

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Header/>
                <GlobalStyle/>
                <IconStyle/>
            </Provider>
        </Fragment>
    );
}

export default App;
