import React,{Fragment} from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./style";
import {IconStyle} from "./statics/iconfont/iconfont";

function App() {
    return (
        <Fragment>
        <Header/>
        <GlobalStyle/>
        <IconStyle/>
        </Fragment>
    );
}

export default App;
