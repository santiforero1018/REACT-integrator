import { Header } from "./components/header";
import { TaskList } from "./components/taskList";


const tasks = [{name: "Clean restRoom"}, {name: "Do an App to ADA"}, {name: "get AREP success"}, ];
function App() {

  return (
    <div className="App">
      <Header />
      <TaskList list={tasks}/>
    </div>
  )
}

export default App
