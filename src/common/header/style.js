import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 8px #f0f1f2;
  box-sizing: content-box;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(242, 242, 242);
`;

export const HeaderInner = styled.div`
  max-width: 1170px;
  height: 64px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  line-height: 64px;
  float: left;
  a {
    display: block;
    height: 64px;
    width: 114px;
    line-height: 64px;
    -webkit-justify-content: center;
    justify-content: center;
  }
  i {
    display: inline-block;
    width: 114px;
    height: 40px;
    margin-top: 11px;
    background-image: url(http://gw.alipayobjects.com/zos/rmsportal/CWZsFzVwokmBwhfegebR.png);
    background-size: 100% 100%;
  }
`;

export const Nav = styled.div`
  float: right;
  padding: 0;

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    cursor: pointer;
    margin-left: 40px;
    line-height: 64px;
  }

  a {
    display: block;
    color: rgba(0, 0, 0, 0.65);
    text-decoration: none;
    height: 64px;
    font-size: 15px;
  }

  .ln-head-nav-active a {
    color: rgba(0, 0, 0, 0.85);
    border-bottom: 3px solid #6260e1;
  }

  .ln-head-nav a:hover {
    color: rgba(0, 0, 0, 0.45);
  }

  .ln-head-nav-active a:hover {
    color: rgba(0, 0, 0, 0.65);
  }
`;
