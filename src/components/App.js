import { useState, useRef } from "react";
import "../App.css";
import List from "./list";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    if (currentTask.trim("").length === 0) return alert("Please Enter a Task");
    setTodoList([{ task: currentTask, completed: false }, ...todoList]);
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
        onKeyDown={(event) => {
          if (event.keyCode === 13) addTask();
        }}
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
            <List
              value={value}
              index={index}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
