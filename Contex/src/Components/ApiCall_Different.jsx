import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const getData = (url) => {
  axios
    .get(url, {
      headers: {
        "x-api-key": "reqres_36f1f083d4024944b478bd690e4c20a2",
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

export const ApiCall_Different = () => {
  const API = `https://reqres.in/api/users?page=1&per_page=5`;
  const [value, setValue] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [searchParam, setSearchParam] = useSearchParams();
  //   console.log("Value: ", value);

  setTimeout(() => {
    console.log("SearchParam: ", searchParam.get("page"));
  }, 100);

  useEffect(() => {
    getData(API)
      .then((res) => {
        setValue(res.data.data);
        setPagination(res.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {value &&
          value.map((el) => {
            return (
              <Link key={el.id}>
                <p>{el.id}</p>
                <img src={el.avatar} alt="Logo" />
                <p>{el.first_name}</p>
                <p>{el.last_name}</p>
              </Link>
            );
          })}
      </div>
      <div style={{ display: "flex", justifySelf: "center", padding: "20px" }}>
        <button>-</button>
        <span style={{ padding: "25px" }}>{pagination?.page}</span>
        <button>+</button>
      </div>
    </>
  );
};
