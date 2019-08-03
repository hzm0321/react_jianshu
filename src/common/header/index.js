import React, {Component} from 'react';
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
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";
import {actionCreators} from "./store";

class Header extends Component {

    getList = () => {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    };

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
                            in={this.props.focused}
                            timeout={300}
                            classNames="slide">
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}/>
                        </CSSTransition>
                        <i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe60c;</i>
                        {this.getList()}
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

// 数据映射
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // 点击了搜索框
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        // 搜索框失焦
        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);