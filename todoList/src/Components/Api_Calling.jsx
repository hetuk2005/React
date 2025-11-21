import axios from "axios";
import { useEffect, useState } from "react";

export const Api_Calling = () => {
  const API = "https://react-8zz0.onrender.com/todo";

  const [data, setData] = useState([]);

  const getApi = () => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error: ", err))
      .finally(() => console.log("Done"));
  };

  console.log(data);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1>Todo List</h1>
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
              textAlign: "center",
            }}
          >
            <p>ID: {el.id}</p>
            <h3>Task: {el.task}</h3>
            <button>Edit{el.edit}</button>
            <button>Delete{el.delete}</button>
          </div>
        ))}
      </div>
    </>
  );
};
