import { useContext, useEffect } from "react";
import { contextCreated } from "../Context/Context_Components";
import axios from "axios";

export const SinglePage = () => {
  const { data, setData } = useContext(contextCreated);

  const apiCall = async () => {
    const API = "https://fakestoreapi.com/products";

    let ans = await axios(API);
    setData(ans.data);
  };

  useEffect(() => {
    apiCall();
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
            <div
              key={el.id}
              style={{
                border: "2px solid #000",
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
                loading="lazy"
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
            </div>
          );
        })}
    </div>
  );
};
