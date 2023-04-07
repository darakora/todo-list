import React from "react";

import "./TodoListItem.scss";

const TodoListItem = ({ id, data, completed }) => {

    let classNames = "list-group-item d-flex justify-content-between";

    return (
        <li className={classNames}>
        <span
            className="list-group-item-label">
            {data}
        </span>
            <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn-edit btn-sm btn-outline-light"  title="Edit">
                <i className="fa fa-edit"></i></button>
            <button type="button" className="btn-trash btn-sm btn-outline-light" title="Delete">
                <i className="fa fa-trash"></i>
             </button>
            </div>
            
        </li>
    )
};

export default TodoListItem;
