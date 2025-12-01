import { useContext, useState } from "react";
import { contextCreated } from "../Context/Context_Components";

import { Navigate } from "react-router-dom";

export const Auth = () => {
  const { isLogin, setisLogin } = useContext(contextCreated);
  const [text, setText] = useState("");
  const [textPass, settextPass] = useState("");

  const handleSubmit = (e) => {
    console.log("Hello From Submit Function");

    e.preventDefault();
    if (text.length === 0 && textPass.length === 0) return;
    setisLogin(!isLogin);
  };

  if (isLogin) {
    console.log("Hello");

    return <Navigate to="/show_login" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="userName"
            placeholder="Enter Username"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => settextPass(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
