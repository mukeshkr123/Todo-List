import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    if (currentTask.trim("").length === 0) return;
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (value) => {
    const updatedList = todoList.filter((task) => task !== value);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        ref={inputTask}
        type="text"
        placeholder="Task..."
        onChange={(e) => {
          setCurrentTask(e.target.value);
        }}
      />
      <button onClick={addTask}>Add Tak</button>
      <hr />
      <ul>
        {todoList.map((value, index) => {
          return (
            <div className="task">
              <li key={index}>{value}</li>
              <button onClick={() => deleteTask(value)}> Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
