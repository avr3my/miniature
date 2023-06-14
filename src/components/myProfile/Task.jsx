import React from "react";
import checkmark from "../../assets/checkmark.png";
import taskImage from "../../assets/task.png";

export default function Task({ content }) {
  return (
    <li className="task">
      <img className="checkmark" src={checkmark} alt="" />
      <span className="task-message">
        <img src={taskImage} alt="" />
        <p>{content}</p>
      </span>
    </li>
  );
}
