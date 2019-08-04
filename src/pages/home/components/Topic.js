import React, {PureComponent} from 'react';
import {TopicItem, TopicWrapper} from "../style";
import {connect} from "react-redux";

class Topic extends PureComponent {
    render() {
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img src={item.get('imgUrl')}/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                <TopicItem className={'text'}>更多热门专题 ></TopicItem>
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);