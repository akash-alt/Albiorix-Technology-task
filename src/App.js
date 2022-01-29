import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './component/pages/Home';
// import About from './component/pages/About';
// import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import View from './component/users/View';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      
      
      
     


      <BrowserRouter>
            <Navbar/>
        <div className='container'>
           
            <Routes>
                <Route exact path="/" element={<Home/> }/>
                {/* <Route exact path="/about" element={<About/> }/>
                <Route exact path="/contact" element={ <Contact/>}/> */}
                <Route path="/users/add" element={<AddUser /> }/> 
                <Route path="/users/edit/:id" element={<EditUser /> }/>
                <Route path="/users/:id" element={<View /> }/> 
            </Routes>
        </div>
        </BrowserRouter>
    </div>)
}

export default App;
