/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { contextCreated } from "../Context/Context_Components";

export const ApiCall = () => {
  const { data, setData } = useContext(contextCreated);

  const api_calling = async () => {
    const API = "https://fakestoreapi.com/products";

    let ans = await axios(API);
    let res = await ans;

    setData(res.data);
  };

  useEffect(() => {
    api_calling();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        justifyItems: "center",
        alignContent: "center",
        gap: "15px",
        padding: "21px",
      }}
    >
      {data &&
        data.map((el) => {
          return (
            <Link
              to={`/singlePage/${el.id}`}
              key={el.id}
              style={{
                border: "2px solid #000",
                color: "#000",
                textDecoration: "none",
                padding: "15px",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <h4 style={{ textAlign: "center" }}>{el.id}</h4>
              <br />
              <img
                src={el.image}
                alt="Products"
                style={{
                  width: "210px",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
              />
              <br />
              <h3 style={{ textTransform: "capitalize" }}>Title: {el.title}</h3>
              <h3>Price: ${el.price}</h3>
              <h3 style={{ textTransform: "capitalize" }}>
                Category: {el.category}
              </h3>
              <p>
                <b>
                  <u style={{ padding: "11px 0" }}>Description</u>:
                </b>{" "}
                {el.description}
              </p>
            </Link>
          );
        })}
    </div>
  );
};
