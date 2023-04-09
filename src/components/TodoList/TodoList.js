import React from "react";
import TodoListItem from '../TodoListItem/TodoListItem';
import { useSelector } from "react-redux";
import './TodoList.scss';

const TodoList = () => {
    const todoData = useSelector((state) => state.todoData)

    return (
        <ul className="app-list list-group">
            {todoData.map((todo) => (
             <TodoListItem key={todo.id} id={todo.id} data={todo.title} completed={todo.completed}/>
            ))}
        </ul>
    )
};

export default TodoList;

