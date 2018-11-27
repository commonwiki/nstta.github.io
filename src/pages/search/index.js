import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

import { Row, Col, Spin } from "antd";
import { Container, SearchWrapper } from "./style";
import { Input } from "antd";

const SearchTop = Input.Search;

class Search extends Component {
  render() {
    const { curTab, changeTabItem } = this.props;

    return (
      <SearchWrapper>
        <Container>
          <Row gutter={30}>
            <Col span={17}>
              <div className="header-wrap">
                <SearchTop
                  placeholder="请输入搜索内容"
                  enterButton="搜索"
                  size="large"
                  onSearch={value => console.log(value)}
                />
              </div>
              <div className="tabBar">
                <ul className="y-box">
                  <li
                    className={curTab === 1 ? "active" : ""}
                    onClick={this.props.changeTabItem.bind(this, 1)}
                  >
                    资讯
                  </li>
                  <li
                    className={curTab === 2 ? " active" : ""}
                    onClick={changeTabItem.bind(this, 2)}
                  >
                    机构
                  </li>
                  <li
                    className={curTab === 3 ? "active" : ""}
                    onClick={changeTabItem.bind(this, 3)}
                  >
                    专家
                  </li>
                  <li
                    className={curTab === 4 ? "active" : ""}
                    onClick={changeTabItem.bind(this, 4)}
                  >
                    成果
                  </li>
                  <li
                    className={curTab === 5 ? "active" : ""}
                    onClick={changeTabItem.bind(this, 5)}
                  >
                    专题
                  </li>
                  <li
                    className={curTab === 6 ? "active" : ""}
                    onClick={changeTabItem.bind(this, 6)}
                  >
                    活动
                  </li>
                </ul>
              </div>

              {/* <div className="demo-loading-container">
                <Spin />
              </div> */}

              <div riot-tag="feedBox" className="feedBox ">
                <div name="feedBox">
                  <div className="sections"> </div>
                  <div className="no-feed">
                    <div className="empty-img">
                      <img
                        src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/search/empty_result_9f5c0cd.png"
                        alt=""
                      />
                    </div>
                    <p>在这个星球中找不到</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={7}>3</Col>
          </Row>
        </Container>
      </SearchWrapper>
    );
  }
}

const mapState = state => ({
  curTab: state.getIn(["search", "cur_tab"])
});

const mapDispatch = dispatch => ({
  changeTabItem(index) {
    dispatch(actionCreators.changeTabItem(index));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Search);
