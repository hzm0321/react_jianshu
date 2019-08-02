import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    // 点击了搜索框
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    //搜索框失焦
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href={'/'}/>
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载App</NavItem>
                    <NavItem className={'right'}>登录</NavItem>
                    <NavItem className={'right'}>
                        <i className={"iconfont"}>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.state.focused}
                            timeout={300}
                            classNames="slide">
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}/>
                        </CSSTransition>
                        <i className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe60c;</i>
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className={'reg'}>注册</Button>
                    <Button className={'writing'}>
                        <i className={"iconfont"}>&#xe615;</i>
                        写文章
                    </Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

export default Header;