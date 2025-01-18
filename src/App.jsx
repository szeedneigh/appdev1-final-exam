import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

const App = () => {
  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;