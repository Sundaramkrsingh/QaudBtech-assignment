import Navbar from './components/navbar';
import TaskInput from './components/taskInput';
import TaskList from './components/taskList';

function App() {

  // page contains navbar, input component, tasks list-component
  return <div>
    <Navbar />                           
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2">
      <TaskInput />
      <TaskList />
    </div>
  </div>
}

export default App