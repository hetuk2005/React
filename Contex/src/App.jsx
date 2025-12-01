import { ApiCall } from "./Components/Api_Call";

import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Api Calling</h1>
      <Navbar />
      <ApiCall />
    </>
  );
}

export default App;
