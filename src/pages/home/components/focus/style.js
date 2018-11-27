import styled from "styled-components";
import d1523964 from "../../../../statics/home.d1523964.png";

export const CarouselWrapper = styled.div`

  margin-bottom: 6px;
  position: relative;
  cursor: pointer;

  .pre,
  .next {
    cursor: pointer;
    display: none;
    height: 40px;
    position: absolute;
    top: 130px;
    width: 28px;
    z-index: 10;
  }

  .pre {
    background: url(${d1523964}) no-repeat 50%;
    background-position: 0 -904px;
    background-size: 246px 1012px;
    left: 0;
  }

  .next {
    background: url(${d1523964}) no-repeat 50%;
    background-position: 0 -944px;
    background-size: 246px 1012px;
    right: 0;
  }

  &:hover .next,
  &:hover .pre {
    display: block;
  }

  .ant-carousel .slick-dots {
    bottom: 8px;
    left: 20px;
    text-align: left;
  }

  .ant-carousel a {
    bottom: 0;
    display: block;
    height: 100px;
    padding-left: 20px;
    padding-top: 52px;
    position: absolute;
    text-align: left;
    width: 100%;
  }

  .ant-carousel a p {
    color: #fff;
    font-size: 20px;
    height: 28px;
    letter-spacing: 0;
    line-height: 28px;
    text-align: justify;
    width: 680px;
  }
`;
