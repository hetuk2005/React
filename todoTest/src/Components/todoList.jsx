export const TodoList = ({ todoData, setTodoData }) => {
  const handleEdit = (id) => {
    // console.log("Hello Edit");
    const editArr = todoData.map((el) =>
      el.id === id ? { ...el, isEdit: !el.isEdit } : el
    );
    setTodoData(editArr);
  };

  const handleDelete = (id) => {
    // console.log("Hello Delete");
    const deleteArr = todoData.filter((el) => el.id !== id);
    setTodoData(deleteArr);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      {todoData?.map((el) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
          key={el.id}
        >
          <input type="checkbox" id="check" style={{ cursor: "pointer" }} />
          <h5>{el.text}</h5>
          <button
            onClick={() => handleEdit(el.id)}
            style={{ cursor: "pointer" }}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(el.id)}
            style={{ cursor: "pointer" }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
