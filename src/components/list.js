import React from "react";

const List = ({ value, index, deleteTask, completedTask }) => {
  return (
    <div>
      <div key={index} className="task">
        <li>{value.task}</li>
        <button onClick={() => completedTask(value.task)}> Completed</button>
        <button onClick={() => deleteTask(value.task)}> Delete</button>
        {value.completed ? (
          <h1>Task Completed</h1>
        ) : (
          <h1>Task Not Completed</h1>
        )}
      </div>
    </div>
  );
};

export default List;
