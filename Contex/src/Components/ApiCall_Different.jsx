import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const getData = (url) => {
  return axios
    .get(url, {
      headers: {
        "x-api-key": "reqres_36f1f083d4024944b478bd690e4c20a2",
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

const setPageFormula = (val) => {
  // console.log("Value: ", val);

  val = Number(val);

  if (typeof val === "number" && val >= 1) val = 1;
  if (!val) val = 1;
  return val;
};

export const ApiCall_Different = () => {
  const [value, setValue] = useState(null);
  // console.log("Value: ", value);

  const [pagination, setPagination] = useState(null);
  // console.log("Pagination: ", pagination);

  const [searchParam, setSearchParam] = useSearchParams();
  //   console.log("Value: ", value);

  const initialPage = setPageFormula(searchParam.get("page"));

  const [page, setPage] = useState(initialPage);

  const API = `https://reqres.in/api/users?page=${page}&per_page=5`;

  setTimeout(() => {
    // console.log("SearchParam: ", searchParam.get("page"));
  }, 100);

  useEffect(() => {
    getData(API)
      .then((res) => {
        setValue(res.data.data);
        setPagination(res.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, [page]);

  useEffect(() => {
    setSearchParam({ page });
  }, [page]);

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
              <Link
                key={el.id}
                style={{ textDecoration: "none", color: "#000" }}
                to={`user_2/${el.id}`}
              >
                <p>{el.id}</p>
                <img src={el.avatar} alt="Logo" />
                <p>{el.first_name}</p>
                <p>{el.last_name}</p>
              </Link>
            );
          })}
      </div>
      <div style={{ display: "flex", justifySelf: "center", padding: "20px" }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
          style={{ cursor: "pointer" }}
        >
          -
        </button>
        <span style={{ padding: "25px" }}>{pagination?.page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === pagination?.total_pages ? true : false}
          style={{ cursor: "pointer" }}
        >
          +
        </button>
      </div>
    </>
  );
};
