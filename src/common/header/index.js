import React from 'react';
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux';
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
import {actionCreators} from "./store";

// 修改Header为无状态组件,提高性能
const Header = (props) => {
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
                        in={props.focused}
                        timeout={300}
                        classNames="slide">
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}/>
                    </CSSTransition>
                    <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe60c;</i>
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
};

// 数据映射
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // 点击了搜索框
        handleInputFocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        // 搜索框失焦
        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);