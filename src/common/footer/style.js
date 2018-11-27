import styled from "styled-components";

export const FooterWrapper = styled.div`
  .pane-module {
    width: 100%;
    border-top: 2px solid #4285f4;
    background-color: #f4f5f6;
    margin-bottom: 16px;
    padding: 15px 20px 20px;
  }

.pane-module .module-head {
    color: #222;
    padding: 0;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
}

.more-items-content {
    overflow: hidden;
    margin-right: -20px;
    margin-bottom: -20px;
}

.more-items-content .item {
    float: left;
    margin: 0 20px 20px 0;
}

.more-items-content .item a {
    color: #777;
    line-height: 1.4;
    font-size: 14px;
}
  .company {
    width: 100%;
    padding: 8px 20px;
    background-color: #f4f5f6;
    line-height: 2;
    font-size: 14px;
    text-align: left;
  }

  .company p {
    color: #777;
}

.company a {
    cursor: pointer;
    color: #777;
}

`;
