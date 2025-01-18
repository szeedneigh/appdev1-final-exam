import { createContext, useState, useEffect, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  loading: false,
  addTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

const fetchTodos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
      setLoading(false);
    };
    loadTodos();
  }, []);

  const addTodo = async (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      userId: 1,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, loading, addTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
};