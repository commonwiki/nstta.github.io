import styled from "styled-components";

export const EventWrapper = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 18px;
    color: #3d464d;
    margin: 0 auto 1rem;
    padding: 20px 0;
    text-align: center;
    border-top: 2px solid #4285f4;
    border-bottom: 1px dashed #e6e8eb;
    font-weight: 600;
  }

  li {
    margin-bottom: 20px;
  }

  .img-cover {
    position: relative;
    width: 100%;
    height: 200px;
    cursor: pointer;
    border-radius: 4px;
  }

  .img-wrap,
  .img-wrap::before {
    display: inline-block;
    height: 100%;
  }

  .img-wrap {
    position: relative;
    cursor: pointer;
    width: 100%;
    text-align: center;
    border: 1px solid #e8e8e8;
    background: #e8e8e8;
    overflow: hidden;
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    height: 100%;
  }


  .thumb {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.5s ease-out 0.1s;
  }
  
  .img-cover:hover  .thumb{
    transform: scale(1.2);
  }

  .title {
    position: absolute;
    bottom: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    padding: 15px;
  }
  
`;
