import axios from "axios";
import { useEffect, useState } from "react";

export const Api_Calling = () => {
  const API = "https://react-8zz0.onrender.com/todo";

  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [editValueID, setEditValueID] = useState("");
  const [editValue, setEditValue] = useState("");

  const getApi = () => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error: ", err));
    // .finally(() => console.log("Done"));
  };

  // console.log(data);

  useEffect(() => {
    getApi();
  }, []);

  const handleAdd = async () => {
    if (input.trim() === "") {
      return;
    }

    const todoInfo = {
      task: input,
      edit: false,
      delete: false,
    }; // It Creates The New Object

    const res = await axios.post(API, todoInfo); // It Is Used For Posting The New Input And Creates Object Of It

    setData((prev) => [...prev, res.data]);
    // console.log("Prev: ", setData);
    setInput("");
  };

  const handleDelete = async (id) => {
    if (!id) return;
    await axios.delete(`${API}/${id}`);

    setData((prev) => prev.filter((el) => el.id !== id));
  };

  const handleEdit = async (id) => {
    if (!id) return;
    setEditValueID(id);

    const item = data.find((el) => el.id === id);
    setEditValue(item.task);
    await axios.patch(`${API}/${id}`, { edit: true });

    const editArr = data.map((el) =>
      el.id === id ? { ...el, edit: true } : el
    );
    setData(editArr);
  };

  const handleEditComfrim = async () => {
    if (!editValueID) return;

    await axios.patch(`${API}/${editValueID}`, {
      task: editValue,
      edit: false,
    });

    const confirmEditArr = data.map((el) =>
      el.id === editValueID ? { ...el, edit: false, task: editValue } : el
    );
    setData(confirmEditArr);
  };

  const handleEditCancel = async (id) => {
    if (!id) return;
    await axios.patch(`${API}/${id}`, { edit: false });

    const cancelArr = data.map((el) =>
      el.id === id ? { ...el, edit: false } : el
    );

    setData(cancelArr);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo Input</h1>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "21px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      {data === 0 && <h1>No Task</h1>}
      <br />
      {data?.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 30px",
            gap: "50px",
          }}
        >
          {el.edit ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <h3>{el.task}</h3>
          )}
          {el.edit ? (
            <>
              <button onClick={handleEditComfrim}>Confirm</button>
              <button onClick={() => handleEditCancel(el.id)}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(el.id)}>Edit</button>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
