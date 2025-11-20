import axios from "axios";
import { useEffect, useState } from "react";

export const Api_Calling = () => {
  const API = "https://fakestoreapi.com/products";

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const getApi = () => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error: ", err))
      .finally(() => console.log("Done"));
  };
  console.table(data);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fake Store</h1>
      <button
        style={{
          display: "block",
          margin: "auto",
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px",
          borderStyle: "solid",
          padding: "5px 15px",
        }}
        onClick={() => setShow(!show)}
      >
        Click Me
      </button>
      {show && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            justifyItems: "center",
            alignContent: "center",
            gap: "41px",
            padding: "21px",
          }}
        >
          {data.map((el) => (
            <div
              key={el.id}
              style={{
                border: "2px",
                borderStyle: "solid",
                width: "100%",
                padding: "15px",
                borderRadius: "7px",
              }}
            >
              <img
                src={el.image}
                alt="Images"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  borderTopRightRadius: "7px",
                  borderTopLeftRadius: "7px",
                }}
              />
              <h5>ID: {el.id}</h5>
              <h5>Title: {el.title}</h5>
              <h5 style={{ textTransform: "capitalize" }}>
                Category: {el.category}
              </h5>
              <h5>Description: {el.description}</h5>
              <h5>Price: {el.price}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <h5>Rate: {el.rating.rate}</h5>
                <h5>Count: {el.rating.count}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
