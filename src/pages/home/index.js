import React, {Component} from 'react';
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {connect} from 'react-redux';
import {actionCreators} from './store'

class Home extends Component {
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        // 在组件销毁时,移除事件监听
        window.removeEventListener('scroll',this.props.changeScroll)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
        window.addEventListener('scroll',this.props.changeScroll)
    }

    render() {
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt={'首页图片'} className={'banner-img'}
                         src={"https://upload.jianshu.io/admin_banners/web_images/4687/0c0c3a40f4453bad58b24e3580f295eeeb453212.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeList());
        },
        changeScroll() {
            if (document.documentElement.scrollTop > 400) {
                dispatch(actionCreators.showScroll());
            } else {
                dispatch(actionCreators.hideScroll());
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);