import { useContext } from "react";
import { contextCreated } from "../Context/Context_Components";

export const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(contextCreated);
  console.log("IsLogin: ", isLogin);

  if (!isLogin) {
    return <Navigate to="/auth" />;
  }

  return children;
};
