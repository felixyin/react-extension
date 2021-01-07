import React from "react";
import B from "./B";
import "./index.css";

export default function Test08ErrorBoundary() {
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
