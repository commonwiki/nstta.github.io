import React, { Component } from "react";

import { Row, Col, Affix } from "antd";

import Focus from "./components/focus";
import List from "./components/list";
import Search from "./components/search";
import Event from "../../common/event";
import Code from "../../common/code";
import Footer from "../../common/footer";

import { connect } from "react-redux";
import { actionCreators } from "./store";

import { HomeWrapper, Channel } from "./style";

class Home extends Component {

  render() {

    return (
      <HomeWrapper>
        <Row gutter={30}>
          <Col span={3}>
            <Channel>
              <Affix offsetTop={20}>
                <ul>
                  <li>
                    <a
                      href="/"
                      target="_self"
                      ga_event="channel_recommand_click"
                      className="channel-item active"
                    >
                      <span>推荐</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.365yg.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="channel-item"
                    >
                      <span>宏观</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_hot/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>国际</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_image/"
                      target="_blank"
                      className="channel-item"
                    >
                      <span>财经</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_tech/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>科技</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_entertainment/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>生态</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_game/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>社会</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_sports/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>文化</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_car/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>智库</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/news_finance/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>政治</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ch/funny/"
                      target="_self"
                      className="channel-item"
                    >
                      <span>刊物</span>
                    </a>
                  </li>
                </ul>
              </Affix>
            </Channel>
          </Col>
          <Col span={14}>
            <Focus />
            <List />
          </Col>
          <Col span={7}>
            <Search />
            <Event />
            <Affix offsetTop={20}>
              <Code />
              <Footer />
            </Affix>
          </Col>
        </Row>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.getFoucs();
  }
}

const mapDispatch = dispatch => ({
  getFoucs() {
    dispatch(actionCreators.getFoucs());
  }
});

export default connect(
  null,
  mapDispatch
)(Home);
