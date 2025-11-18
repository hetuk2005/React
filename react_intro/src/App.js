import "./App.css";
import { Name } from "./Components/Name";

function App() {
  const arr = ["Hetuk", "Mehfooz", "Farhan", "Khushi"];

  //js
  let name = "Mehfooz Khan -1";

  return (
    <>
      <h1 className="mehfooz">Hello {name}</h1>
      <h1 style={{ color: "purple" }}>Hello</h1>
      <Name />

      {arr.map((el) => (
        <div>
          <li>{el}</li>
        </div>
      ))}
    </>
  );
}

export default App;
