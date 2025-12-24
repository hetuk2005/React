import React, { useReducer } from "react";

import * as type from "../Reducer/Action";
import { reducer } from "../Reducer/Reducer";
import { initialValue } from "../Reducer/Store";
import { TodoList } from "./todoList";

export const TodoInput = () => {
  const todoText = React.useRef(null);
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleAdd = () => {
    const value = todoText.current.value.trim();
    if (value === "") {
      dispatch({ type: type.ERROR_TODO_ITEMS });
      return;
    }
    dispatch({ type: type.LOADING_TODO_ITEMS });

    setTimeout(() => {
      dispatch({ type: type.ADD_TODO_ITEMS, payload: value });
    }, 1000);
    todoText.current.value = "";
  };

  if (state.isLoading)
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo Input</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "13px",
        }}
      >
        <input type="text" placeholder="Enter Your Task" ref={todoText} />
        <button onClick={handleAdd} style={{ cursor: "pointer" }}>
          Add
        </button>
      </div>
      <br />
      {state.isError ? (
        <h1 style={{ textAlign: "center" }}>Something Went Wrong...</h1>
      ) : (
        <TodoList value={{ state, dispatch }} />
      )}
    </>
  );
};
