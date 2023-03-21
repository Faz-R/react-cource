import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Form from './pages/Form';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
