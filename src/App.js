import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    if (currentTask.trim("").length === 0) return;
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (value) => {
    const updatedList = todoList.filter((task) => task.task !== value);
    setTodoList(updatedList);
  };

  const completedTask = (taskToComplete) => {
    const updatedList = todoList.map((task) => {
      if (task.task === taskToComplete) {
        return { ...task, completed: true };
      }
      return task;
    });
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
            <div key={index} className="task">
              <li>{value.task}</li>
              <button onClick={() => completedTask(value.task)}>
                {" "}
                Completed
              </button>
              <button onClick={() => deleteTask(value.task)}> Delete</button>
              {value.completed ? (
                <h1>Task Completed</h1>
              ) : (
                <h1>Task Not Completed</h1>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
