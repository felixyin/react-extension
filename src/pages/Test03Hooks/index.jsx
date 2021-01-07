import React from "react";
import ReactDOM from "react-dom";
/* 
export default class Test03Hooks extends React.Component {
  state = { count: 0 };
  ageRef = React.createRef();
  addFunc = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  showAge = () => {
    alert(this.ageRef.current.value);
  };
  componentDidMount = () => {
    this.intel = setInterval(
      () => this.setState({ count: this.state.count + 1 }),
      1000
    );
  };
  componentWillUnmount = () => {
    clearInterval(this.intel);
  };
  unMount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button type="button" onClick={this.addFunc}>
          点我加一 函数式setState
        </button>
        <button type="button" onClick={this.unMount}>
          卸载
        </button>
        <input type="number" name="age" ref={this.ageRef} />
        <button type="button" onClick={this.showAge}>
          通过ref获取值
        </button>
      </div>
    );
  }
}
 */
//  函数式组件写法
export default function Test03Hooks() {
  // state hook
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("初始者");
  //   console.log(count, setCount);

  const ageRef = React.useRef();

  // effect hook
  React.useEffect(() => {
    // console.log("@@@");
    let timer = setInterval(() => {
      setCount((oc) => oc + 1);
    }, 1000);
    return function cleanup() {
      console.log("相当于componentWillUnmount");
      clearInterval(timer);
    };
    //   }, [count]); // 相当于componentDidUpdate count
  }, []); // 【】，不检测任何属性，相当于componentDidMount

  function addFunc() {
    // console.log("ok");
    // 第一种写法
    // setCount(count + 1);
    // 第二种写法
    setCount((oldCount) => oldCount + 1);
  }

  function changeName() {
    setName("测试名");
  }

  function unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  function showAge() {
    alert(ageRef.current.value);
  }
  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <h2>我的名字是：{name}</h2>
      <button type="button" onClick={addFunc}>
        点我加一 sate hook
      </button>
      <button type="button" onClick={changeName}>
        点我改名
      </button>
      <button type="button" onClick={unMount}>
        卸载
      </button>
      <input type="number" name="age" ref={ageRef} />
      <button type="button" onClick={showAge}>
        通过ref获取值
      </button>
    </div>
  );
}
