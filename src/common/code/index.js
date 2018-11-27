import React, { Component } from "react";
import { CodeWrapper } from "./style";

class Code extends Component {
  render() {
    return (
      <CodeWrapper>
        <h3>
          <span>公众号</span>
        </h3>
        <div class="image-box">
          <img
            src="https://pic.36krcnd.com/201711/27085325/5oqfcsuefx3qcwdx.png"
            alt="36氪App"
          />
        </div>
      </CodeWrapper>
    );
  }
}

export default Code;
