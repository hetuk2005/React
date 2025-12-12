import React from "react";

import { Link, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
  const location = useLocation();
  // console.log("Location: ", location);

  let currentPath = "";

  const crumbsName = location.pathname
    .split("/")
    .filter((el) => el != "")
    .map((el) => {
      // eslint-disable-next-line react-hooks/immutability
      currentPath += `/${el}`;

      return (
        <div className="links" style={{ display: "inline-block" }} key={el}>
          <Link to={currentPath}>{el}</Link>
        </div>
      );
    });
  // console.log("Crumbs Name: ", crumbsName);

  return (
    <div
      style={{
        display: "block",
        width: "70%",
        padding: "30px",
        margin: "auto",
      }}
    >
      {crumbsName}
    </div>
  );
};
