// import { useEffect, useState } from "react";

import { Api_Calling } from "./Components/Api_Calling";

function App() {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);

  // useEffect(() => {
  //   console.log("Hello Without Dependency");
  // });

  // useEffect(() => {
  //   console.log("Hello With Dependency But Empty");
  // }, []);

  // useEffect(() => {
  //   console.log("Hello With Dependency");
  // }, [count]);

  return (
    <>
      {/* <div className="App">
        <h2>Count = {count}</h2>
        <h2>Count 1 = {count1}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount1((prev) => prev + 1)}>+ count1</button>
      </div> */}
      <Api_Calling />
    </>
  );
}

export default App;
