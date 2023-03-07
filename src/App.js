import React from 'react'
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './routes/Home';
import Places from './routes/Places';
import Foods from './routes/Foods';
import About from './routes/About';


function App() {
  return (
    <>
    <Navbar/>
    <Route path='/' element={<Home />} />
    <Route path='/places' element={<Places />} />
    <Route path='/foods' element={<Foods />} />
    <Route path='/about' element={<About/>} />
    </>
  );
}


export default App;
