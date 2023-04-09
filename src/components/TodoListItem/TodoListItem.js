import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTask } from "../../Redusers/todoSlice";
import "./TodoListItem.scss";

const TodoListItem = ({ id, data, completed }) => {
    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(
            deleteTodo({
                id: id
            })
        )
    }

    const onDoneClick = () => {
        dispatch(
            doneTask({
                id: id, 
                completed: !completed
            })
        )
    }

    let classNames = "list-group-item d-flex justify-content-between";

    return (
        <li className={classNames}>
        <span
            className="list-group-item-label">
            <input 
                id="cb1"
                type="checkbox"
                className="mr-2"
                checked={completed}
                onChange={onDoneClick}
                />
            {data}
        </span>
            <div className="d-flex justify-content-center align-items-center">
            <button 
                    type="button" 
                    className="btn-trash btn-sm btn-outline-light" 
                    title="Delete" 
                    onClick={onDeleteClick}>
                <i className="fa fa-trash"></i>
             </button>
            </div>
            
        </li>
    )
};

export default TodoListItem;
