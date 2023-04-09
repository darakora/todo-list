import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redusers/todoSlice";
import './AddItem.scss';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const AddItem = () => {
    const [ data, setData ] = useState();

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        let trimData = data?.trim();
        if(trimData === undefined || trimData.length === 0) 
		{
            NotificationManager.warning('Warning message', 'Please, add the task', 3000);
			setData("");
			return;
		}

        dispatch(
            addTask({
                title: data
            })
        )
        setData("");
    }

    return (
        <div className="div app-add-form">
            <h3>Add your todo</h3>
            <form onSubmit={onSubmit} className="add-form d-flex">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your todos"
                    onChange={event => setData(event.target.value)}
                    value={data || ''}
                />
                <button type="submit" className="btn btn-outline-light">ADD</button>
            </form>
            <NotificationContainer/>
        </div>
    )
};

export default AddItem;