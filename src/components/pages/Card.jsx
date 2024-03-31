import React, { useState, useEffect } from 'react';
import { EditTaskModal } from '../../modals/EditTask';

import './Card.css';

export const Card = ({ taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const [isChecked, setIsChecked] = useState(() => {
        const savedState = localStorage.getItem(`checkedState_${taskObj.id}`);
        return savedState ? JSON.parse(savedState) : taskObj.isChecked || false;
    });
    

    const colors = [
        { primaryColor: "#8B0000", secondaryColor: "#FF6347" },
        { primaryColor: "#00008B", secondaryColor: "#ADD8E6" },
        { primaryColor: "#CCCC00", secondaryColor: "#FFFFE0" },
        { primaryColor: "#006400", secondaryColor: "#90EE90" },
        { primaryColor: "#FF4500", secondaryColor: "#FFA07A" },
        { primaryColor: "#800080", secondaryColor: "#BA55D3" },
        { primaryColor: "#008B8B", secondaryColor: "#E0FFFF" },
        { primaryColor: "#8B008B", secondaryColor: "#FFC0CB" },
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = (event) => {
        const newIsChecked = event.target.checked;
        setIsChecked(newIsChecked);
        updateListArray({ ...taskObj, isChecked: newIsChecked }, index);
    };
    
    useEffect(() => {
        localStorage.setItem(`checkedState_${taskObj.id}`, JSON.stringify(isChecked));
    }, [isChecked, taskObj.id]);
    

    return (
        <div className="card-wrapper">
            <div className="card-top" style={{ backgroundColor: colors[index % 8].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors[index % 8].secondaryColor }}>
                    {taskObj.Name}
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} style={{ marginLeft: '10px' }} />
                </span>

                <ul className='desc'>
                    {taskObj.Description.split('\n').map((point, i) => (
                        <li key={i} style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{point}</li>
                    ))}
                </ul>

                <div className="card-bottom">
                    <div className="card-bottom-left">
                        <p className="created-at">Created at: {taskObj.createdAt}</p>
                    </div>
                    <div className="card-bottom-right">
                        <i className="fas fa-edit" style={{ color: "black", marginRight: "10px", cursor: "pointer" }} onClick={() => setModal(true)}></i>
                        <i className="fas fa-trash" style={{ color: "red", cursor: "pointer" }} onClick={handleDelete}></i>
                    </div>
                </div>
            </div>
            <EditTaskModal modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};