import React from "react";

import "./index.css";

export default function Test06Optimize() {
  const [carName, updateCarName] = React.useState("奔腾");
  function changeCarName() {
    updateCarName("奔驰");
  }
  console.log(">>>>>>>>>>>>>>parent");
  return (
    <div className="parent">
      <h3>我是parent组件</h3>
      <h4>我的车是：{carName}</h4>
      <button onClick={changeCarName}>点击换车 </button>
      <Child />
    </div>
  );
}

function Child() {
  console.log(">>>>>>>>>>>>>>child");
  return (
    <div className="child">
      <h3>我是child组件</h3>
    </div>
  );
}
