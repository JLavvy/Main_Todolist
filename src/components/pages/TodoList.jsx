import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateTaskModal} from '../../modals/createTask';
import { Card } from './Card';
import { Navbar } from './navbar';
import './TodoList.css';



export const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList]= useState([])
  


  useEffect(() => {
    let arr =localStorage.getItem("taskList")
    
    if(arr){
      let obj= JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const updateListArray = (obj, index) =>{
    let tempList =taskList
    tempList[index] =obj
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList)
    window.location.reload()
    

  };

  const deleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index); 
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList)); 
    setTaskList(updatedTaskList); 
    window.location.reload()
  };


  const toggle = () => {
    setModal(!modal);
  };

  const saveTask=(taskObj)=>{
    let tempList= taskList
    tempList.push(taskObj )
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    setModal(false)
  }

  return (
    <>
       <Navbar />
      <div className='header-dash '>
      
        <h3>Todo List</h3>
        <button className='btn btn-primary mt-2' onClick={toggle}>Create Task</button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => <Card taskObj= {obj} index={index} deleteTask = {deleteTask} updateListArray={updateListArray} />)}
        
      </div>
      <CreateTaskModal toggle={toggle} modal={modal} save ={saveTask} />
    </>
  );
};
