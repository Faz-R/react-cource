import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import NotFound from './pages/NotFoundPage';
import Form from './pages/FormPage';
import Layout from './components/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
          <Route path="404" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
