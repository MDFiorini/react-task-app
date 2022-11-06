//Estension ES7 - escrivir rcfe
// cntrl x para borrar una linea entera

import TaskList from "./components/TaskList";
import Taskform from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto p-10">
        <Taskform />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
