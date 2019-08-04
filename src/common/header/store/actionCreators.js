import {actionTypes} from "./index";
import {fromJS} from "immutable";
import axios from 'axios';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseOut = () => ({
    type: actionTypes.MOUSE_OUT
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});

// 异步获取推荐关键词
export const getList = () => {
    return (dispatch) => {
        axios
            .get('/api/recommend_list')
            .then((res) => {
                console.log(res);
                const data = res.data.data;
                dispatch(asyncGetList(data));
            })
            .catch(() => {
                console.log('search recommend error')
            })
    };
};

// 需把data数组转化成转化成immutable数组传入
const asyncGetList = (data) => ({
    type: actionTypes.GET_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});