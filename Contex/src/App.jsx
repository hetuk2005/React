import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Api Calling</h1>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
