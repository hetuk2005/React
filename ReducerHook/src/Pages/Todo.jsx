import "../App.css";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";

export const Todo = () => {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
};
