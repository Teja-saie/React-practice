import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AddTodo, ChangeDone } from "./Redux/Store/Reducers/TodoSlice";

const Todo = () => {
  // const [stated,setState]=useState([]);
  const dispatch = useDispatch();
  const currState = useSelector((state) => state.todos);

  const Nameref = useRef(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(AddTodo(Nameref.current.value));
          Nameref.current.value = "";
        }}
      >
        <input name="name" ref={Nameref} autoComplete="off"></input>
        <input type="submit"></input>
      </form>
      <span className="grid"
        onClick={(e) =>
          e.target.tagName === "DIV" ? dispatch(ChangeDone(e.target.id)) : null
        }
      >
        {currState.map((item) => (
          <div
            id={item.key}
            className={item.done?"Completed":"NotCompleted"}
            key={String(item.key)}
            style={{
              padding: "5px",
              border: "2px solid #000000",
              margin: "10px",
            }}
          >
            <span style={{pointerEvents:"none"}}>
            <p>Name:{item.name}</p>
            <p>Done:{String(item.done)}</p>
            <p>Key:{String(item.key)}</p>
            </span>
          </div>
        ))}
      </span>
    </div>
  );
};

export default Todo;
