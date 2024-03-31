import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateTaskModal } from '../../modals/createTask';
import { Card } from './Card';
import { Navbar } from './navbar';
import './TodoList.css';

export const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTaskList = localStorage.getItem("taskList");
    if (storedTaskList) {
      const parsedTaskList = JSON.parse(storedTaskList);
      const updatedTaskList = parsedTaskList.map((task) => {
        const storedCheckedState = localStorage.getItem(`checkedState_${task.id}`);
        if (storedCheckedState) {
          return { ...task, isChecked: JSON.parse(storedCheckedState) };
        }
        return task;
      });
      setTaskList(updatedTaskList);
    }
  }, []);

  const updateListArray = (obj, index) => {
    const updatedTaskList = taskList.map((task, i) => {
      return i === index ? { ...task, isChecked: obj.isChecked } : task;
    });
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    updatedTaskList.forEach((task) => {
      localStorage.setItem(`checkedState_${task.id}`, JSON.stringify(task.isChecked));
    });
  };

  const deleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    const updatedTaskList = [...taskList, taskObj];
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    localStorage.setItem(`checkedState_${taskObj.id}`, JSON.stringify(taskObj.isChecked));
    setModal(false);
  };

  return (
    <>
      <Navbar />
      <div className='header-dash '>
        <h3 className='header-topic'>Todo List</h3>
        <button className='btn btn-primary mt-2' onClick={toggle}>Create Task</button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card
            key={index}
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
      <CreateTaskModal toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};