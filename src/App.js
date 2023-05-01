import React from 'react';
import Header from './component/Header';
import Login from './component/Login';
import DemoCarousel from './component/DemoCarousel';
import Footer from './component/Footer';
import About from './component/About';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Signup from './component/Signup';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>

     </>
  )
};

export default App;