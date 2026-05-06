import React from "react";
import Counter from "./Counter";
import Parent from "./Parent";
import { MyProvider } from "./MyContext";

function App() {
  return(
    <div>
      <Counter/>
      <hr/>
      <MyProvider>
        <Parent/>
      </MyProvider>
      </div>
  )
}
export default App 











































