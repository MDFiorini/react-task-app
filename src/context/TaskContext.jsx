import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContex = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  // function createTask(task) {
  //   setTasks([...tasks, task]);           //Creo un array con todo lo de tasks mas lo de task y lo pongo en tasks.
  // }

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));

  }

  return (
    <TaskContex.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContex.Provider>
  );
}
