import React from "react";
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {

    const todoData = [
        {id: 1, tittle: "todo1", completed: false},
        {id: 2, tittle: "todo2", completed: false},
        {id: 3, tittle: "todo3", completed: false},
    ]

    return (
        <ul className="app-list list-group">
            {todoData.map((todo) => (
             <TodoListItem key={todo.id} data={todo.tittle} completed={todo.completed}/>
            ))}
        </ul>
    )
};

export default TodoList;

