import { useState } from "react";
import { Header } from "./components/header";
import { TaskList } from "./components/taskList";

const iniTasks = [{name: "Clean restRoom"}, {name: "Do an App to ADA"}, {name: "get AREP success"}, ];
function App() {

  const [tasks, setTask] = useState(iniTasks);

  return (
    <div className="App">
      <Header />
      <TaskList list={tasks}/>
    </div>
  )
}

export default App
