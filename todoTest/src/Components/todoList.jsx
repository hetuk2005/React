export const TodoList = () => {
  const handleEdit = () => {
    console.log("Hello Edit");
  };

  const handleDelete = () => {
    console.log("Hello Delete");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <input type="checkbox" id="check" style={{ cursor: "pointer" }} />
        <h5>1st Task</h5>
        <button onClick={() => handleEdit()} style={{ cursor: "pointer" }}>
          Edit
        </button>
        <button onClick={() => handleDelete()} style={{ cursor: "pointer" }}>
          Delete
        </button>
      </div>
    </>
  );
};
