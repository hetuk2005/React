import axios from "axios";
import { useEffect, useState } from "react";

export const Api_Calling = () => {
  const API = "https://jsonplaceholder.typicode.com/todos";

  const [data, setData] = useState([]);

  const getApi = () => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => console.log("Done"));
  };

  //   console.table(data);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1>Hello Api</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
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
              textAlign: "center",
            }}
          >
            <p>ID: {el.id}</p>
            <h3>Title: {el.title}</h3>
            {el.completed ? (
              <h6>Completed: True</h6>
            ) : (
              <h6>Completed: False</h6>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
