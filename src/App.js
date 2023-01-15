
import './App.css';
import { ToDoContextProvider } from './context/ToDoContext';
import ToDoList from './components/ToDoList'
import ToDoItem from './components/ToDoItem'



function App() {
  return (
    <ToDoContextProvider>
      <ToDoList>
        <ToDoItem/>
      </ToDoList>
    </ToDoContextProvider>
  );
}

export default App;
