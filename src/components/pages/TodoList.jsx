import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateTaskModal} from '../../modals/createTask';
import './TodoList.css';

export const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList]= useState([])


  const toggle = () => {
    setModal(!modal);
  };

  const saveTask=(taskObj)=>{
    let tempList= taskList
    tempList.push(taskObj )
    setTaskList(tempList)
    setModal(false)
  }

  return (
    <>
      <div className='header-dash '>
        <h3>Todo List</h3>
        <button className='btn btn-primary mt-2' onClick={toggle}>Create Task</button>
      </div>
      <div className="task-container">
        {taskList.map((obj) =><li>{obj.Name}</li> )}
        
      </div>
      <CreateTaskModal toggle={toggle} modal={modal} save ={saveTask} />
    </>
  );
};
