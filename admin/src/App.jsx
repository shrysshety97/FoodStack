import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Add from './components/pages/Add'
import List from './components/pages/List';
import Orders from './components/pages/Orders';

const App = () => {

  const url = "http://localhost:4000"
  return (
    <BrowserRouter>
    <ToastContainer/>
    <div className='bg-primary text-[#404040] text[90%]'>
        <Header/>
        <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row mt-3'>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<Add url={url}/>}/>
              <Route path='/list' element={<List url={url}/>}/>
              <Route path='/orders' element={<Orders url={url}/>}/>
            </Routes>
        </div>
    </div>
  </BrowserRouter>
  )
}

export default App
