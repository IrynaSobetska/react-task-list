import Card from "./components/Card";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const checkHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  };

  const deleteHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <Card>
      <h1>Task list</h1>
      <Form addTask={addTask} />
      <TaskList
        tasks={tasks}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
      />
    </Card>
  );
}

export default App;
