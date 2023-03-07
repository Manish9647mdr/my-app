import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './Component/About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);



