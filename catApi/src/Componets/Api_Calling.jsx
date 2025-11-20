import axios from "axios";
import { useEffect, useState } from "react";

export const Api_Calling = () => {
  const API =
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=$%7BApi_Key%7D";

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
      <h1 style={{ textAlign: "center" }}>Cat Api</h1>
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
                borderRadius: "7px",
              }}
            >
              <img
                src={el.url}
                alt="Images"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                }}
              />
              <div
                style={{
                  padding: "15px",
                }}
              >
                <h5>ID: {el.id}</h5>
                <h5>Width: {el.width}</h5>
                <h5>Height: {el.height}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
