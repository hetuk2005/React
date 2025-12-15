import { useState } from "react";
import { TodoList } from "./todoList";

export const TodoInput = () => {
  const [todoText, setTodoText] = useState("");

  const handleTodo = () => {
    console.log("Hello Add");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo Input</h1>
      <div
        className="input"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Enter The Task"
          onChange={(e) => e.prevent.value}
        />
        <button onClick={() => handleTodo()} style={{ cursor: "pointer" }}>
          Add
        </button>
      </div>
      <br />
      <TodoList />
    </>
  );
};
