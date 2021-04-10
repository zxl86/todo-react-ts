import React, { useRef } from 'react';

import {
  FormContainer,
  LabelContainer,
  InputContainer,
  ButtonContainer,
} from './NewTodo.styles';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let inputText = textInputRef.current!.value;
    onAddTodo(inputText);

    textInputRef.current!.value = '';
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="form-control">
        <LabelContainer htmlFor="todo-text">Todo Text</LabelContainer>
        <InputContainer type="text" id="todo-text" ref={textInputRef} />
      </div>
      <ButtonContainer type="submit">Add Todo</ButtonContainer>
    </FormContainer>
  );
};

export default NewTodo;
