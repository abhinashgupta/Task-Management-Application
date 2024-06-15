import { useState } from "react";
import React from "react";

import { addNewTasks } from "../redux/actions";

import { useDispatch } from "react-redux";

const Taskform = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

   dispatch(addNewTasks(text));
   
   setText(' ');
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <input onChange={onInputChange} value={text} placeholder="Enter the new task" />
      </form>
    </div>
  );
};

export default Taskform;
