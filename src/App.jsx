import React from 'react'
import './App.css'

import { Login } from './components/pages/login';
import { TodoList } from './components/pages/TodoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Routes> 
          <Route index element={ <Login />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/dashboard" element={ <TodoList />} />
        </Routes>

        </BrowserRouter>

       
       


      </div>
    </>
  );
}

export default App
