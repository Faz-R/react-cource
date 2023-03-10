import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
