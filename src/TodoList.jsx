import React from "react";

const TodoList = ({ value, index, lochecked }) => {
  return (
    <ul>
      <li key={index}>
        {value}
        <button onClick={() => lochecked(index)}>x</button>
      </li>
    </ul>
  );
};
export default TodoList;
