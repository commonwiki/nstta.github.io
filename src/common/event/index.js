import React, { Component } from "react";
import { EventWrapper } from "./style";

class Event extends Component {
  render() {
    return (
      <EventWrapper>
        <h3>
          <span>热门活动</span>
        </h3>
        <ul class="am-list">
          <li>
            <div class="img-cover">
              <a href="/p/5163419.html" target="_blank" className="img-wrap">
                <img
                  className="thumb"
                  src="//p99.pstatp.com/list/190x124/pgc-image/R9lmFgJEXIjx97"
                  alt=""
                />
              </a>

              <div class="title">2018，创业黄金时代结束的一年| 深氪</div>
            </div>
          </li>
          <li>
            <div class="img-cover">
              <a href="/p/5163419.html" target="_blank" className="img-wrap">
                <img
                  className="thumb"
                  src="//p99.pstatp.com/list/190x124/pgc-image/R9lmFgJEXIjx97"
                  alt=""
                />
              </a>
              <div class="title">
                因为退市上了热搜，陪你跑过12年时光的《QQ音速》还是落幕了
              </div>
            </div>
          </li>
        </ul>
      </EventWrapper>
    );
  }
}

export default Event;
