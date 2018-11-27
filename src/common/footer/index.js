import React, { Component } from "react";
import { FooterWrapper } from "./style";

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div class="pane-module">
          <div class="module-head">更多</div>
          <ul class="more-items-content">
            <li class="item">
              <a href="/about/">关于我们</a>
            </li>
            <li class="item">
              <a href="/join/">加入我们</a>
            </li>
            <li class="item">
              <a href="/report/">媒体报道</a>
            </li>
            <li class="item">
              <a href="/media_partners/">媒体合作</a>
            </li>
            <li class="item">
              <a href="/cooperation/">产品合作</a>
            </li>
            <li class="item">
              <a href="/media_cooperation/">合作说明</a>
            </li>
            <li class="item">
              <a
                href="https://ad.toutiao.com/promotion/?source2=pchomemore"
                target="_blank"
              >
                广告投放
              </a>
            </li>
            <li class="item">
              <a href="/contact/">联系我们</a>
            </li>
            <li class="item">
              <a href="/user_agreement/">用户协议</a>
            </li>
            <li class="item">
              <a href="/privacy_protection/">隐私政策</a>
            </li>
            <li class="item">
              <a href="/complain/">侵权投诉</a>
            </li>
            <li class="item">
              <a href="http://renzheng.toutiao.com/guide?platform=%27PC%27&amp;source=%27www.toutiao.com%27">
                企业认证
              </a>
            </li>
          </ul>
        </div>

        <div class="company">
          <p class="J-company-name"> © 2018 智酷通</p>
          <a href="http://www.12377.cn/" target="_blank" ga_event="click_about">
            中国互联网举报中心
          </a>
          <a
            href="http://www.miibeian.gov.cn/"
            target="_blank"
            ga_event="click_about"
          >
            京ICP证140141号
          </a>
          <div>
            <a
              href="http://www.miibeian.gov.cn/"
              target="_blank"
              ga_event="click_about"
            >
              京ICP备12025439号-3
            </a>
            <a href="/license/" target="_blank" class="icp">
              网络文化经营许可证
            </a>
          </div>
          <p>京-非经营性-2016-0081</p>
          <a href="/a3642705768/" target="_blank">
            跟帖评论自律管理承诺书
          </a>
          <p>公司名称：智酷通科技（深圳）有限公司</p>
          <p>违法和不良信息举报：010-58341833</p>
        </div>
      </FooterWrapper>
    );
  }
}

export default Footer;
