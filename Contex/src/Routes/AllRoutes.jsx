import { Routes, Route } from "react-router-dom";
import { Auth } from "../Components/Auth";
import { Show_Login } from "../Pages/show_Login";
import { Page_404 } from "../Pages/Page_404";
import { ApiCall } from "../Components/Api_Call";
import { PrivateRoute } from "../Auth/privateRoute";
import { SinglePage } from "../Components/Single_Page";
import { ApiCall_Different } from "../Components/ApiCall_Different";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <ApiCall />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/show_login" element={<Show_Login />}></Route>
      <Route
        path="/user_2"
        element={
          <PrivateRoute>
            <ApiCall_Different />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/home/:productId"
        element={
          <PrivateRoute>
            <SinglePage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<Page_404 />}></Route>
    </Routes>
  );
};
