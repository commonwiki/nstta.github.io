import React, { PureComponent } from "react";
import {  message, Spin } from "antd";
import reqwest from "reqwest";

import InfiniteScroll from "react-infinite-scroller";

import "./style.css";

import { Item } from "./style";

const fakeDataUrl = "/api/homeList.json";

class HomeList extends PureComponent {
  state = {
    data: [],
    loading: false,
    hasMore: true
  };

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: res => {
        callback(res);
      }
    });
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        data: res.data
      });
    });
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true
    });

    if (data.length > 20) {
      message.warning("没有更多了...");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.getData(res => {
      data = data.concat(res.data);
      this.setState({
        data,
        loading: false
      });
    });
  };

  render() {
    return (
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={this.handleInfiniteOnLoad}
        hasMore={!this.state.loading && this.state.hasMore}
      >
        <ul>
          {this.state.data.map((item,index) => (
            <li key={index}>
              <Item>
                <div
                  className="bui-left single-mode-lbox"
                >
                  <a
                    href="/group/6625880071661945357/"
                    target="_blank"
                    className="img-wrap"
                  >
                    <img
                      className="lazy-load-img"
                      src={item.image_url}
                      lazy="loaded"
                      alt=""
                    />
                  </a>
                </div>

                <div className="single-mode-rbox">
                  <div className="single-mode-rbox-inner">
                    <div ga_event="article_title_click" className="title-box">
                      <a
                        href="/group/6625880071661945357/"
                        target="_blank"
                        className="link"
                      >
                        {item.title}
                      </a>
                    </div>

                    <div className="bui-box footer-bar">
                      <div className="bui-left footer-bar-left">
                        <a
                          href="search/?keyword=%E6%97%B6%E6%94%BF"
                          target="_blank"
                          className="footer-bar-action tag tag-style-other"
                        >
                          时政
                        </a>
                        {/* <a
                          href="/c/user/50502346173/"
                          target="_blank"
                          class="footer-bar-action media-avatar"
                        >
                          <img src={item.image_url} lazy="loaded" />
                        </a> */}
                        <a
                          href="/"
                          target="_blank"
                          className="footer-bar-action source"
                        >
                          人民网⋅
                        </a>
                        <span className="footer-bar-action">1分钟前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            </li>
          ))}
        </ul>

        {this.state.loading && this.state.hasMore && (
          <div className="demo-loading-container">
            <Spin />
          </div>
        )}
      </InfiniteScroll>
    );
  }
}

export default HomeList;
