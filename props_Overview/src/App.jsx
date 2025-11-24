import { Card } from "./Components/Card";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "21px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card name="Hetuk" email="hetuk@gmail.com" age="20" />
        <Card name="Mehfooz" email="mehfoozsir@gmail.com" age="25" />
        <Card />
      </div>
    </>
  );
}

export default App;
