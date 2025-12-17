import React, { useReducer, useRef } from "react";

import { reducer } from "../Reducer/Reducer";
import { TodoList } from "./TodoList";
import { initialValue } from "../Reducer/Store";
import { ADD_TODO_ITEMS } from "../Reducer/Action";

export const TodoInput = () => {
  const todoText = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log("State: ", state);

  const handleAdd = () => {
    const value = todoText.current.value;
    dispatch({ type: ADD_TODO_ITEMS, payload: value });
  };

  return (
    <>
      <input type="text" placeholder="Enter Your Task" ref={todoText} />
      <button onClick={handleAdd}>Add</button>
      <TodoList value={{ state, dispatch }} />
    </>
  );
};
