import React from 'react';

import TodoForm from '../forms/TodoForm.component';
import Todo from './Todo.component';
import { useTodo } from '../../context/todo-context';
import { TodoListContainer } from './styles/TodoList.style';

interface PropsType {
  onUserClick: (todoId: number) => void;
}

const TodoList = ({ onUserClick }: PropsType): JSX.Element => {
  const { todos, setTodos } = useTodo();

  const addTodo = (
    text: string,
    isCompleted: boolean,
    todoDate: Date,
    status: string,
    description: string,
  ): void => {
    const newTodos = [...(todos ?? []), {
      text, isCompleted, todoDate, status, description,
    }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    newTodos[index].status = 'Done';
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <TodoListContainer className="todo-list">
      <div className="title">
        <h1>Inbox</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <div className="todo">
        {todos
          && todos.map((todo: any, index: number) => (
            <Todo
              key={todo.text}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              onUserClick={onUserClick}
            />
          ))}
      </div>
    </TodoListContainer>
  );
};

export default TodoList;
