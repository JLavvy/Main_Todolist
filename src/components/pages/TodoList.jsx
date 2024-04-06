import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './navbar';
import './TodoList.css';

export const TodoList = () => {
  const [modal, setModal] = useState(false); // State to manage the modal

  // Function to toggle the modal state
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Navbar />
      <div className='header-dash '>
        <h3 className='header-topic'>Todo List</h3>
        {/* Use toggleModal instead of toggle */}
        <button className='btn btn-primary mt-2' onClick={toggleModal}>Create Task</button>
      </div>
      <div className="task-container">
        {/* Your task content goes here */}
      </div>
      {/* Your modal component goes here, if applicable */}
    </>
  );
};
