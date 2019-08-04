import axios from "axios";
import {GET_HOME, GET_MORE_HOME, HIDE_SCROLL, SHOW_SCROLL} from "./actionTypes";
import {fromJS} from "immutable";

export const getHomeList = () => {
    return (dispatch) => {
        axios
            .get('/api/home')
            .then(res => {
                const data = res.data.data;
                dispatch(asyncGetHomeList(data))
            })
            .catch(() => {
                console.log('home data error')
            })
    }
};

export const getMoreList = () => {
    return (dispatch) => {
        axios
            .get('/api/home')
            .then(res => {
                const data = res.data.data;
                dispatch(asyncGetMoreHomeList(data))
            })
            .catch(() => {
                console.log('home more data error')
            })
    };
};
export const showScroll = ()=>({
    type: SHOW_SCROLL
});

export const hideScroll = ()=>({
    type: HIDE_SCROLL
});

const asyncGetHomeList = (data) => ({
    type: GET_HOME,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList
});

const asyncGetMoreHomeList = (data) => ({
    type: GET_MORE_HOME,
    articleList: fromJS(data.articleList)
});