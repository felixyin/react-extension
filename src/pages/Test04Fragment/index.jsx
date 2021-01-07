import React, { Fragment } from "react";

export default function Test04Fragment() {
  //   Fragment 骗过React，不需要多一层div，具有key属性
  //   return (
  //     <Fragment>
  //       <input type="text" />
  //       <input type="text" />
  //     </Fragment>
  //   );
  return (
    <>
      <input type="text" />
      <input type="text" />
    </>
  );
}
