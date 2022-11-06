import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContex } from "../context/TaskContext";

function TaskList() {

  const { tasks } = useContext(TaskContex);  //del objeto 'value' ( en el taskContex), uso solo tasks

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
