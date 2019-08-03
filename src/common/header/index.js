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
        // 解构赋值获取props中的对象数据
        const {focused, list, page, mouseIn, totalPage} = this.props;
        // 把immutable数组转化为js数组
        const jsList = list.toJS();
        const pageList = [];
        // 根据page取出10个list中的数据
        if (jsList.length > 0) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                );
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseOut={this.props.handleMouseOut}
                    onMouseOver={this.props.handleMouseOver}>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch
                        onClick={() => this.props.handleChangePage(page, totalPage,this.spinIcon)}>
                        <i
                            ref={(icon)=>{this.spinIcon = icon}}
                            className={"iconfont spin"}>&#xe865;</i>
                        换一批
                    </SearchInfoSwitch>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    };

    render() {
        const {focused} = this.props;
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
                            in={focused}
                            timeout={300}
                            classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}/>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe60c;</i>
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
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
            dispatch(actionCreators.searchBlur());
        },
        // 鼠标点击
        handleMouseOver() {
            dispatch(actionCreators.mouseEnter())
        },
        // 鼠标移除
        handleMouseOut() {
            dispatch(actionCreators.mouseOut())
        },
        // 改变热搜页面
        handleChangePage(page, totalPage,spin) {
            // 初始选择角度
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg';
            dispatch(actionCreators.changePage(page % totalPage + 1));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);