import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const getData = (url) => {
  return axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};

export const SinglePage = () => {
  const [data, setData] = useState({});

  const { productId } = useParams();
  const API = `https://fakestoreapi.com/products/${productId}`;

  useEffect(() => {
    getData(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error: ", err));
  }, [productId]);

  console.log("Data: ", data);

  return (
    <>
      <div>
        {
          <div
            key={data.id}
            style={{
              padding: "15px",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {/* <h4 style={{ textAlign: "center" }}>{data.id}</h4> */}
            <br />
            <img
              src={data.image}
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
            <h3 style={{ textTransform: "capitalize" }}>Title: {data.title}</h3>
            <h3>Price: ${data.price}</h3>
            <h3 style={{ textTransform: "capitalize" }}>
              Category: {data.category}
            </h3>
            <p>
              <b>
                <u style={{ padding: "11px 0" }}>Description</u>:
              </b>{" "}
              {data.description}
            </p>
          </div>
        }
      </div>
    </>
  );
};
