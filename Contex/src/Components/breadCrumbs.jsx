import React from "react";

import { Link, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
  const location = useLocation();
  console.log("Location: ", location);

  let currentPath = "";

  const crumbsName = location.pathname
    .split("/")
    .filter((el) => el === "")
    .map((item) => {
      return (currentPath += `/${item}`);
    });
  console.log("Crumbs Name: ", crumbsName);

  return (
    <>
      <div>{currentPath}</div>
    </>
  );
};
