import React, { PureComponent } from "react";

import { Icon, Input, AutoComplete } from "antd";

import "./style.css";

const Option = AutoComplete.Option;

const data = [
  "火箭签约安东尼",
  "山东暴雨预警",
  "黄晓明 股票操纵 ",
  "韩学臣被判无期",
  "茅台致歉 ",
  "阅文收购新丽传媒",
  "哈登对女子动粗",
  "南京楼市调控新政",
  "怪物猎人世界下架",
  "江西彭小峰被批捕"
];

const options = data.map((item, index) => (
  <Option key={item} value={item}>
    <i className={"search-no search-no-" + (index + 1)}>{index + 1}</i>
    <span className="search-txt">{item}</span>
  </Option>
));

class Search extends PureComponent {
  render() {
    return (
      <div
        className="certain-category-search-wrapper"
        style={{ width: "100%" }}
      >
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: "auto" }}
          size="large"
          style={{ width: "100%" }}
          dataSource={options}
          placeholder="请输入关键字"
          optionLabelProp="value"
        >
          <Input
            suffix={<Icon type="search" className="certain-category-icon" />}
          />
        </AutoComplete>
      </div>
    );
  }
}

export default Search;
