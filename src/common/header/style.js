import styled from "styled-components";
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  flex: 1;
  position: absolute;
  top: 0;
  left: 20px;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size:contain;
`;

export const Nav = styled.div`
  flex: 5;
  width: 960px;
  height: 100%;
  margin-left: 200px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
  &.focused{
  width: 240px;
  }
`;

export const Addition = styled.div`
flex: 1;
  display: flex;
  height: 56px;
  justify-content: right;
  align-items: center;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  &.reg{
    color: #ec6149;
  }
  &.writing{
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter{
    width: 160px;
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 240px;
  }
  .slide-exit{
    transition: all .2s ease-out;
  }
  .slide-exit-active{
  width: 160px;
  }
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
`;