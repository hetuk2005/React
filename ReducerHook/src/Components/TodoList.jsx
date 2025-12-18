import React from "react";

import * as type from "../Reducer/Action";

export const TodoList = ({ values }) => {
  const { state, dispatch } = values;

  const handleDelete = (id) => {
    dispatch({ type: type.DELETE_TODO_ITEMS, payload: id });
  };

  return (
    <>
      {state.items &&
        state.items.map((el) => {
          return (
            <ul
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                listStyle: "none",
              }}
            >
              <input type="checkbox" />
              <li>{el.id}</li>
              <li>{el.text}</li>
              <div style={{ display: "flex", gap: "11px" }}>
                <button>Edit</button>
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </div>
            </ul>
          );
        })}
    </>
  );
};
