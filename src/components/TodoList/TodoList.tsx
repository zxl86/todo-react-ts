import React from 'react';

import { UlContainer, LiContainer } from './TodoList.styles';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <UlContainer>
      {items.map((item) => (
        <LiContainer key={item.id}>
          <span>{item.text}</span>
          <button onClick={onDeleteTodo.bind(null, item.id)}>DELETE</button>
        </LiContainer>
      ))}
    </UlContainer>
  );
};

export default TodoList;
