import React from "react";

import "./index.css";

export default function Test07RenderProps() {
  return (
    <div className="pp">
      <h3>我是parent组件</h3>
      <A render={(testData) => <B testData={testData} />} />
    </div>
  );
}

function A(props) {
  const [testData] = React.useState("A组件中的state中的test字段的初始化数据");
  return (
    <div className="aa">
      <h3>我是A组件</h3>
      {props.render(testData)}
    </div>
  );
}

function B(props) {
  return (
    <div className="bb">
      <h3>我是B组件</h3>
      <h4>{props.testData}</h4>
    </div>
  );
}
