import { useRef } from "react";

function App() {
  const defaultData = useRef(null);

  const handleInput = () => {
    const textVal = defaultData.current.value;
    console.log("Text Value: ", textVal);
  };

  // const [text, setText] = useState("");
  // console.log("Text: ", text);

  console.log("My App Render");

  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="Enter Some Data"
          ref={defaultData}
          // onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleInput}>Click</button>
      </div>
    </>
  );
}

export default App;
