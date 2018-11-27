import styled from "styled-components";

export const SearchWrapper = styled.div`
  background: #f1f2f3;
`;
export const Container = styled.div`
  width: 1170px;
  max-width: 1170px;
  margin: 0 auto;
  min-height: 1000px;

  .header-wrap {
    margin-bottom: 30px;
    margin-top: 20px;
  }

  .tabBar {
    font-size: 18px;
    color: #222;
    margin-bottom: 16px;
  }

  .y-box {
    display: block;
  }

  .y-box:after {
    content: " ";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
  }

  li {
    float: left;
    margin-right: 33px;
    font-size: 18px;
    cursor: pointer;
  }

  .active {
    color: #4285f4;
    cursor: default;
  }

  .feedBox .no-feed {
    background-color: #fff;
    min-height: 320px;
  }
  .feedBox .no-feed .empty-img {
    margin: 0 auto;
    width: 167px;
    height: 74px;
    padding-top: 110px;
  }

  .feedBox .no-feed .empty-img img {
    width: 100%;
    height: 100%;
  }

  .feedBox .no-feed p {
    margin-top: 24px;
    font-size: 14px;
    color: #999;
    text-align: center;
  }
`;
