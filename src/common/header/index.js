import React, { Component } from "react";
import { HeaderWrapper, HeaderInner, Logo, Nav } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderInner>
          <Logo>
            <a className="ln-header-logo" href="/">
              <i className="head-logo-icon ln-header-logo-icon" />
            </a>
          </Logo>

          <Nav>
            <ul className="ln-head-nav">
              <li className="ln-head-nav-active">
                <a href="/pricing">首页</a>
              </li>
              <li>
                <a href="/help">机构</a>
              </li>
              <li>
                <a href="/result">成果</a>
              </li>
              <li>
                <a href="/help">专题</a>
              </li>
              <li>
                <a href="/dev">小程序</a>
              </li>
            </ul>
          </Nav>
        </HeaderInner>
      </HeaderWrapper>
    );
  }
}

export default Header;
