import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { contextCreated } from "../Context/Context_Components";

const getData = (url) => {
  return fetch(url, {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getCurrentPageFromUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) value = 1;
  if (!value) value = 1;
  return value;
};

export const User = () => {
  const [data, setData] = React.useState({});
  const { toggleAuth } = React.useState(contextCreated);
  const [searchParam, setSearchParam] = useSearchParams();
  const initial = getCurrentPageFromUrl(searchParam.get("page"));
  const [page, setPage] = React.useState(initial);
  console.log("Page: ", page);

  const [text, setText] = React.useState("");

  React.useEffect(() => {
    getData(`https://reqres.in/api/users?page=${page}`)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [page]);

  React.useEffect(() => {
    setSearchParam({ page, text });
  }, [page, text]);

  return (
    <>
      <h1>User</h1>
      <button onClick={toggleAuth}>Log Out</button>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <div>
        {data.data?.map((el, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img src={el.avatar} alt="Person Logo" />
            <Link to={`/users/${el.id}`}>
              {el.first_name}
              {""}
              {el.last_name}
            </Link>
          </div>
        ))}
        
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button>{page}</button>
        <button disabled={page >= 2} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};
