import React, { useState } from "react";
import { toggleTask, updateTask , deleteTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();
    const [editting, setEditting] = useState(false);
    const [text, setText] = useState(task.data);

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditting(prevState => !prevState);

        dispatch(updateTask(task._id , text))
    }
  return (
    <li
      className="task"
      style={{
        textDecoration: task.done ? "line-through" : "",
        color: task.done ? "#bdc3c7" : "34495e",
      }}
      onClick={() => dispatch(toggleTask(task._id))}
    >
      <span style={{ display: editting ? "none" : "" }}>{task.data}</span>

      <form onSubmit={onFormSubmit} style={{ display: editting ? "inline" : 'none' }}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className="edit-task" />
      </form>
      <span className="icon" onClick={()=>dispatch(deleteTask(task._id))}>
        <i className="fas fa-trash" />
      </span>
      <span
        className="icon"
        onClick={() => setEditting((prevState) => !prevState)}
      >
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Task;
