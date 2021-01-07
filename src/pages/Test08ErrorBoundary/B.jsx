import React from "react";
import { withRouter } from "react-router-dom";

function B(props) {
  const [users, updateUsers] = React.useState([
    { id: 1, name: "张三" },
    { id: 2, name: "李四" },
  ]);
  //   const [users, updateUsers] = React.useState("");

  try {
    return (
      <div className="bb">
        <h3>我是B组件</h3>
        <h4>{props.testData}</h4>

        <button
          onClick={() => {
            updateUsers([
              { id: 1, name: "小孙" },
              { id: 2, name: "李鬼" },
              { id: 3, name: "六二" },
              { id: 4, name: "王五" },
            ]);
          }}
        >
          切换正确数据
        </button>
        <button
          onClick={() =>
            updateUsers(
              /*传递错误的数据，引发渲染错误！*/
              { id: 3, name2: "六二2" },
              { id: 4, name3232322332323232: "王五2" }
            )
          }
        >
          切换错误数据，render失败，引发界面降级
        </button>
        <hr />

        <ul style={{ width: "100px", margin: "0 auto" }}>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </div>
    );
  } catch (e) {
    return <div>render发生错误！界面降级！！！</div>;
  }
}

export default withRouter(B);
