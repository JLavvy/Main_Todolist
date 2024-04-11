import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './navbar';
import './TodoList.css';

export const TodoList = () => {

  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);


  const handleCreateTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a task.');
    }
  };

  const handleCompletedTasks = () => {
    // Logic to handle completed tasks
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleEditTask = (index) => {
    setEditTaskIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleSaveEditedTask = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = editedTask.trim();
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    } else {
      setErrorMessage('Task cannot be empty.');
    }
  };

  const handleCancelEdit = () => {
    setEditTaskIndex(null);
    setEditedTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };


  ;
  return (
    <>
      <Navbar />
      <div className='header-dash'>
        <h3 className='header-topic'>Todo List</h3>
      </div>
      <div className="task-container d-flex justify-content-center ">
        <div className="min-vh-10 text-black d-flex flex-column align-items-center justify-content-center p-4">
          <div className="card">
            <header className="d-flex justify-content-between w-100 mb-4">
              <h1 className="text-4xl font-bold">📝todo </h1>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-primary d-inline-flex align-items-center"
                  onClick={handleCreateTask}
                >
                  <span>Create</span>
                  <svg
                    className="ms-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <button
                  className="btn btn-secondary d-inline-flex align-items-center"
                  onClick={handleCompletedTasks}
                >
                  <span>Completed</span>
                  <svg
                    className="ms-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </header>
            <div className="d-flex flex-column justify-content-center w-100 max-w-5xl">
              <div className="w-100 mb-4">
                <input
                  className="form-control bg-gray-300 border-black"
                  type="text"
                  placeholder="Add a new task"
                  value={newTask}
                  onChange={handleInputChange}
                />
              </div>

              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              {tasks.map((task, index) => (
                <div key={index} className="form-check rounded px-3 py-2 mb-2" style={{ backgroundColor: '#F3F4F6' }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`task-${index}`}
                        checked={task.completed}
                        onChange={() => handleToggleCompletion(index)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`task-${index}`}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                      >
                        {task.text}
                      </label>
                    </div>
                    {editTaskIndex === index ? (
                      <>
                        <input
                          type="text"
                          className="form-control"
                          value={editedTask}
                          onChange={(e) => setEditedTask(e.target.value)}
                        />
                        <div>
                          <button className="btn btn-sm btn-primary me-2" onClick={handleSaveEditedTask}>
                            Save
                          </button>
                          <button className="btn btn-sm btn-secondary" onClick={handleCancelEdit}>
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <label className="form-check-label" htmlFor={`task-${index}`}>
                          {task}
                        </label>
                        <div>
                          <div>
                            <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditTask(index)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 17l-1 4 4-1 9.414-9.414a2 2 0 0 0 -.414-2.586l-2-2a2 2 0 0 0 -2.586-.414z" />
                                <circle cx="12" cy="12" r="2" />
                              </svg>
                            </button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTask(index)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                              </svg>
                            </button>
                          </div>

                        </div>
                      </>
                    )}
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
