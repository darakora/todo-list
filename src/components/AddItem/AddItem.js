import React from "react";
import './AddItem.scss';

const AddItem = () => {

    return (
        <div className="div app-add-form">
            <h3>Add your todo</h3>
            <form className="add-form d-flex">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your todos"
                />
                <button type="submit" className="btn btn-outline-light">ADD</button>
            </form>
        </div>
    )
};

export default AddItem;