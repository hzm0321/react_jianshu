import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS(
    {
        topicList: [],
        articleList: [],
        recommendList: [],
        showScroll:false
    }
);

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case actionTypes.GET_MORE_HOME:
            return state.set('articleList', state.get('articleList').concat(action.articleList));
        case actionTypes.SHOW_SCROLL:
            return state.set('showScroll', true);
        case actionTypes.HIDE_SCROLL:
            return state.set('showScroll', false);
        default:
            return state;
    }
}