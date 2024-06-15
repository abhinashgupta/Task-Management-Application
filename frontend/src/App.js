import "./App.css";
import Header from "./components/Header";
import Taskform from "./components/Taskform";
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="App">
      <Header />
      <Taskform />
      <Tasks />
    </div>
  );
}

export default App;
