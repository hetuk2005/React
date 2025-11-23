import axios from "axios";
import { useEffect, useState } from "react";

export const Api_Calling = () => {
  const API = "https://react-8zz0.onrender.com/todo";

  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
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

  const handleChangeComplete = async (value, id) => {
    if (!id) return;
    await axios.patch(`${API}/${id}`, { complete: value });

    const checkedArr = data.map((el) =>
      el.id === id ? { ...el, complete: value } : el
    );

    const onlyChecked = checkedArr.filter((el) => el.complete === true);
    setCheckedItems(onlyChecked);
    setData(checkedArr);
  };

  const handleAllClick = async () => {
    for (let item of data) {
      await axios.patch(`${API}/${item.id}`, { complete: true });
    }

    const setAllTrue = data.map((el) => {
      return { ...el, complete: true };
    });

    setData(setAllTrue);
    setCheckedItems(setAllTrue);
  };

  const handleAllDeSelect = async () => {
    for (let item of data) {
      await axios.patch(`${API}/${item.id}`, { complete: false });
    }

    const setAllFalse = data.map((el) => {
      return { ...el, complete: false };
    });

    setData(setAllFalse);
    setCheckedItems([]);
  };

  const handleAllDelete = async () => {
    // await axios.patch(`${API}/${editValueID}`, { complete: false });
    for (let item of data) {
      if (item.complete) {
        await axios.delete(`${API}/${item.id}`);
      }
    }

    const deleteArr = data.filter((el) => !el.complete);
    setData(deleteArr);
    setCheckedItems([]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo Input</h1>
      <br />
      {checkedItems.length <= 0 ? (
        <button
          style={{
            position: "absolute",
            right: "500px",
            top: "230px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px",
            borderStyle: "solid",
          }}
          onClick={handleAllClick}
        >
          Select All
        </button>
      ) : (
        <>
          <button
            style={{
              position: "absolute",
              right: "580px",
              top: "230px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "1px",
              borderStyle: "solid",
            }}
            onClick={handleAllDeSelect}
          >
            De-Select
          </button>
          <button
            style={{
              position: "absolute",
              right: "500px",
              top: "230px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "1px",
              borderStyle: "solid",
            }}
            onClick={() => handleAllDelete()}
          >
            Delete All
          </button>
        </>
      )}
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
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px",
            borderStyle: "solid",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            cursor: "pointer",
            border: "1px",
            borderStyle: "solid",
            borderRadius: "5px",
          }}
        >
          Add
        </button>
      </div>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <br />
      {data <= 0 && <h1 style={{ textAlign: "center" }}>No Task</h1>}
      <br />
      {data?.map((el) => (
        <div
          key={el.id}
          style={
            el.complete
              ? {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 30px",
                  gap: "50px",
                  opacity: "0.5",
                }
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 30px",
                  gap: "50px",
                }
          }
        >
          <input
            type="checkbox"
            checked={el.complete}
            id="check"
            onChange={(e) => handleChangeComplete(e.target.checked, el.id)}
            style={{ cursor: "pointer", borderRadius: "5px" }}
          />
          {el.edit ? (
            <input
              type="text"
              style={{ borderRadius: "5px" }}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <h3
              style={{ textDecoration: el.complete ? "line-through" : "none" }}
            >
              {el.task}
            </h3>
          )}
          {el.edit ? (
            <>
              <button
                onClick={handleEditComfrim}
                style={{
                  cursor: "pointer",
                  borderRadius: "5px",
                  border: "1px",
                  borderStyle: "solid",
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => handleEditCancel(el.id)}
                style={{
                  cursor: "pointer",
                  borderRadius: "5px",
                  border: "1px",
                  borderStyle: "solid",
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleEdit(el.id)}
                style={{
                  cursor: "pointer",
                  borderRadius: "5px",
                  border: "1px",
                  borderStyle: "solid",
                }}
              >
                Edit
              </button>
              <button
                style={{
                  cursor: "pointer",
                  borderRadius: "5px",
                  border: "1px",
                  borderStyle: "solid",
                }}
                onClick={() => handleDelete(el.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
