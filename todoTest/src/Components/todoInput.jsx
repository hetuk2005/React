import { useState } from "react";
import { TodoList } from "./todoList";

export const TodoInput = () => {
  const [todoData, setTodoData] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleTodo = () => {
    // console.log("Hello Add");
    const data = {
      id: Date.now(),
      text: todoText,
      isEdit: false,
      isComplete: false,
    };

    setTodoData((prev) => [...prev, data]);
    setTodoText("");
  };
  // console.log("Data: ", todoData);

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
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleTodo} style={{ cursor: "pointer" }}>
          Add
        </button>
      </div>
      <br />
      <TodoList Props={(todoData, setTodoData)} />
    </>
  );
};
