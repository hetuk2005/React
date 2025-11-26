import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { NotFoundPage } from "../Pages/Not_Found_Page";
import { Route, Routes } from "react-router-dom";
// import { SinglePage } from "../Pages/Single_Page";
// import { InfoPage } from "../Pages/InfoPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/info_page/:userID" element={<InfoPage />}></Route> */}
        <Route path="*" element={<NotFoundPage />}></Route>
        {/* <Route path="/single_page" element={<SinglePage />}></Route> */}
      </Routes>
    </>
  );
};
