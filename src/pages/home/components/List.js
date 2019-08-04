import React, {PureComponent, Fragment} from 'react';
import {ListInfo, ListItem, LoaderMore} from "../style";
import {connect} from 'react-redux';
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

class List extends PureComponent {

    render() {
        const {articleList} = this.props;
        return (
            <Fragment>
                <br/>
                <br/>
                {
                    articleList.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail'}>
                            <ListItem>
                                <ListInfo>
                                    <h1 className={'title'}>{item.get('title')}</h1>
                                    <p className={'content'}>{item.get('desc')}</p>
                                </ListInfo>
                                <img alt={"文章图片"} src={item.get('imgUrl')}/>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LoaderMore onClick={this.props.getMoreList}>
                    阅读更多
                </LoaderMore>
            </Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        getMoreList(){
            dispatch(actionCreators.getMoreList())
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(List);