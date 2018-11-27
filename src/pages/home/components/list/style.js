import styled from "styled-components";

export const Item = styled.div`
  height: 123px;
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid #e8e8e8;

  .single-mode-lbox {
    width: 158px;
    height: 102px;
    margin-right: 16px;
  }
  .single-mode-rbox:before {
    content: "";
    width: 0;
    font-size: 0;
    height: 100%;
    visibility: hidden;
    display: inline-block;
    vertical-align: middle;
  }
  .bui-left {
    float: left;
  }

  .img-wrap {
    position: relative;
    cursor: pointer;
    width: 100%;
    text-align: center;
    border: 1px solid #e8e8e8;
    background: #e8e8e8;
    overflow: hidden;
    transform-style: preserve-3d;
    height: 100%;
  }

  .img-wrap,
  .img-wrap::before {
    display: inline-block;
    height: 100%;
  }

  .img-wrap::before {
    content: "";
    width: 0;
    font-size: 0;
    visibility: hidden;
    vertical-align: middle;
  }

  .img-wrap img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    transition: all 0.5s ease-out 0.1s;
  }

  .img-wrap img:hover {
    transform: scale(1.2);
  }

  .single-mode-rbox {
    height: 100%;
    overflow: hidden;
  }

  .single-mode-rbox-inner {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
  }

  .title-box {
    display: block;
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 4px;
    font-weight: 700;
    max-height: 52px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .link {
    color: #222;
  }

  .footer-bar {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .footer-bar-action.tag {
    font-size: 12px;
    color: #eee;
    margin-right: 10px;
    padding: 1px 2px;
    border: 1px solid #eee;
  }

  .tag-style-other {
    border-color: #87a5b5 !important;
    color: #87a5b5 !important;
  }
`;
