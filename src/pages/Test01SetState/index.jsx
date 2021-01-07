import React, { Component } from "react";

export default class Test01SetState extends Component {
  state = { count: 0 };
  add = async () => {
    const { count } = this.state;

    this.setState({ count: count + 1 });
    this.setState({ count: count + 1 }, () => {
      console.log("异步setState回调输出count：", this.state.count);
    });
    console.log(
      "更新后的state.count(总是输出更新前的数值？):",
      this.state.count
    );
  };
  addFunc = () => {
    /*this.setState((state, props) => {
      console.log("old count:", state.count);
      return { count: state.count + 1 };
    }); */
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button type="button" onClick={this.add}>
          点我加一
        </button>
        <button type="button" onClick={this.addFunc}>
          点我加一 函数式setState
        </button>
      </div>
    );
  }
}
