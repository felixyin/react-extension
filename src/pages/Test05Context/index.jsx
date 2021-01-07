import React from "react";
import "./index.css";

const MyContext = React.createContext();

export default function Test05Context() {
  const [username] = React.useState("tom");
  return (
    <div className="content">
      <h3>我是A组件</h3>
      <h4>我的用户名是：{username} ，该怎么把数据传给孙子、曾孙...？</h4>

      <MyContext.Provider value={username}>
        <B />
      </MyContext.Provider>
    </div>
  );
}

const B = (props) => {
  return (
    <div className="b">
      <h3>我是B组件</h3>
      <h4>跳过B组件传值</h4>
      <C />
    </div>
  );
};

function C(props) {
  return (
    <div className="c">
      <h3>我是C组件</h3>
      <MyContext.Consumer>
        {(un) => (
          <>
            <h4>我从A组件 通过context 接收到的用户名是：{un}</h4>
            <D username={un} />
          </>
        )}
      </MyContext.Consumer>
    </div>
  );
}

function D(props) {
  return (
    <div className="d">
      <h3>我是D组件</h3>
      <h4>我从C组件 通过props 接收到的用户名是：{props.username}</h4>
    </div>
  );
}
