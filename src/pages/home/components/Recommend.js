import React, { PureComponent } from 'react';
import {RecommendItem, RecommendWrapper} from "../style";
import {connect} from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const {recommendList} = this.props;
        return (
            <RecommendWrapper>
                {
                    recommendList.map((item) => {
                        return(
                            <RecommendItem key={item.get('id')}>
                                <img alt={'推荐'} src={item.get('imgUrl')}/>
                            </RecommendItem>
                        )
                    })
                }

            </RecommendWrapper>
        );
    }
}

export const mapStateToProps = (state) => {
    return{
        recommendList:state.getIn(['home','recommendList'])
    }
};

export const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);