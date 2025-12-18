import React from "react";

import * as type from "../Reducer/Action";

export const TodoList = ({ value = {} }) => {
  const editValue = React.useRef(null);
  const { state, dispatch } = value;

  console.log(value, state);

  const handleDelete = (id) => {
    dispatch({ type: type.DELETE_TODO_ITEMS, payload: id });
  };

  const handleEdit = (id) => {
    dispatch({ type: type.EDIT_TODO_ITEMS, payload: id });
  };

  const handleConfirm = (id) => {
    const editText = editValue.current.value.trim();
    dispatch({
      type: type.EDIT_TODO_ITEMS,
      payload: { updatedText: editText, id: id },
    });
  };

  const handleCancel = (id) => {
    dispatch({ type: type.EDIT_TODO_ITEMS, payload: id });
  };

  return (
    <>
      {state?.items?.map((el) => {
        return (
          <ul
            key={el.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              listStyle: "none",
            }}
          >
            <input type="checkbox" style={{ cursor: "pointer" }} />
            <li>{el.id}</li>
            {el.isEdits ? (
              <input type="text" defaultValue={el.text} ref={editValue} />
            ) : (
              <li>{el.text}</li>
            )}
            <div style={{ display: "flex", gap: "11px" }}>
              {el.isEdits ? (
                <>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleConfirm(el.id)}
                  >
                    Confirm
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCancel(el.id)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(el.id)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </ul>
        );
      })}
    </>
  );
};
