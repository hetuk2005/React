let str = JSON.parse(sessionStorage.getItem("data")) || [];

let count = 0;

const Todo = () => {
  const text_todo = document.querySelector(".text_todo").value;

  const todoData = {
    id: count,
    text: text_todo,
    isEdit: false,
    isDelete: false,
  };
  count++;

  if (text_todo == "") {
    return;
  }

  str.push(todoData);
  sessionStorage.setItem("data", JSON.stringify(str));
  console.log("Todo Data: ", todoData);
};

Todo();