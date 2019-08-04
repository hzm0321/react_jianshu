import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const TopicItem = styled.div`
  display: flex;
  align-items: center;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-right: 18px;
  margin-bottom: 18px;
  img{
    width: 32px;
    height: 32px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-right: 10px;
  }
  &.text{
    border: 0px;
    background: #fff;
    color: #969696;
  }
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
    border-radius: 10px;
  }
`;

export const HomeRight = styled.div`
  padding-top: 28px;
  width: 280px;
  float: right;
`;

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #dcdcdc;
  img{
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  .title{
    font-size: 18px;
    margin-bottom: 4px;
    color: black;
  }
  .content{
    margin-top: 8px;
    font-size: 13px;
    line-height: 24px;
    margin-right: 10px;
    color: #969696;
  }
`;

export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`;

export const RecommendItem = styled.div`
  margin-bottom: 5px;
  img{
    width: 100%;
    min-height: 50px;
  }
`;

export const WriterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: antiquewhite;
  width: 100%;
  height: 200px;
  border-radius: 4px;
`;

export const LoaderMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 50px;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 10px;
`;

