import React, { useState } from "react";

function ToDoList(props) {
  return (
    <div>
      <li
        key={props.index}
        onClick={() => {
          props.onChange(props.index);
        }}
      >
        {props.itemName}
      </li>
    </div>
  );
}

export default ToDoList;
