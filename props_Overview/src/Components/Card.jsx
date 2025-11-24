import React from "react";

export const Card = ({
  name = "Not Provided",
  age = "Not Specify",
  email = "Not Given",
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          border: "2px solid red",
          height: "200px",
          maxWidth: "300px",
          padding: "21px",
        }}
      >
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Age: {age}</h2>
      </div>
    </>
  );
};
