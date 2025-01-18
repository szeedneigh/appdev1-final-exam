const TodoForm = ({ addTodo, newTodo, setNewTodo }) => {
  return (
    <div className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo title"
      />
      <button
        onClick={() => {
          if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo("");
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;