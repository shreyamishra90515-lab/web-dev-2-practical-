import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function Child() {
  const data = useContext(MyContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>{data}</p>
    </div>
  );
}

export default Child 