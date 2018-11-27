import styled from "styled-components";


export const HomeWrapper = styled.div`
  width: 1170px;
  max-width: 1170px;
  margin: 0 auto;

  .ant-carousel .slick-slide {
    margin-top: 15px;
    text-align: center;
    height: 300px;
    line-height: 300px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

export const Channel = styled.div`
  text-align: center;
  margin-top: 15px;
  .channel-item {
    display: block;
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #444;
    border-radius: 4px;
    margin-bottom: 2px;
    transition-property: color, background-color;
  }

  .channel-item span {
    display: inline-block;
    font-size: 16px;
  }

  .channel-item:hover {
    -webkit-animation-name: hvr-back-pulse;
    animation-name: hvr-back-pulse;
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    background-color: #4285f4;
    color: #fff;
  }

  .active {
    background-color: #4285f4;
    color: #fff;
  }
`;
