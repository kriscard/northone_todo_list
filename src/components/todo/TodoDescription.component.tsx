import React, { useState } from 'react';

import { useTodo } from '../../context/todo-context';
import {
  DescriptionContainer, Title, TextBlock, Input, Button,
} from './styles/TodoDescription.style';


interface TodoProps {
  todoId: number;
}

const TodoDescription = ({ todoId }: TodoProps): JSX.Element => {
  const { todos, setTodos } = useTodo();
  const [text, setText] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const arrayOfTodos = [...todos];
  const todo = arrayOfTodos[todoId];

  const handleSubmit = (index: number): void => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    newTodos[index].description = description;
    setTodos(newTodos);
  };

  return (
    <DescriptionContainer>
      <div>
        <Title>{todo.text}</Title>
      </div>
      <div>
        <TextBlock>{todo.description}</TextBlock>
      </div>
      <h5>Update your todo</h5>

      <form className="todo-description" name="todo">
        <div className="todo-description__title">
          {todo && <Input value={text} onChange={(e): void => setText(e.target.value)} placeholder="new title" />}
        </div>
        <div className="todo-description__content">
          {todo && (
            <Input
              value={description}
              onChange={(e): void => setDescription(e.target.value)}
              placeholder="new description"
            />
          )}
        </div>
        <Button type="button" onClick={(): void => handleSubmit(todoId)}>
          Update
        </Button>
      </form>
    </DescriptionContainer>
  );
};

export default TodoDescription;
