import React from 'react';
import dayjs from 'dayjs';

import {
  TodoContainer,
  TodoItems,
  TodoInfo,
  TodoStatus,
  DateFormat,
  DoneIcon,
  UpdateIcon,
  DeleteIcon,
} from './styles/Todo.style';

interface TodoTypes {
  todo: { text: string; isCompleted: boolean; todoDate: string; status: string };
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  onUserClick: (index: number) => void;
}

const Todo = ({
  todo, index, completeTodo, removeTodo, onUserClick,
}: TodoTypes): JSX.Element => (
  <TodoContainer className="todo">
    <TodoItems className="todo__title">
      {todo.text}
      <TodoInfo className="todo__info">
        <DateFormat className="todo__date">{dayjs(todo.todoDate).format('MMM D')}</DateFormat>
        <TodoStatus
          className="status"
          style={todo.status === 'Pending' ? { backgroundColor: '#ffc15e' } : { backgroundColor: '#56d68b' }}
        >
          {todo.status}
        </TodoStatus>
        <DoneIcon onClick={(): void => completeTodo(index)} />
        <UpdateIcon onClick={(): void => onUserClick(index)} />
        <DeleteIcon onClick={(): void => removeTodo(index)} />
      </TodoInfo>
    </TodoItems>
  </TodoContainer>
);

export default Todo;
