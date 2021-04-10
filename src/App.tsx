import React, { useState } from 'react';

import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';

import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleAddTodo = (todoText: string) => {
    const todo = { id: `t${idCounter}`, text: todoText };
    setTodos((prevTodos) => [...prevTodos, todo]);
    setIdCounter(idCounter + 1);
  };

  const handleDeleteTodo = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
