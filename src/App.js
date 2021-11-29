import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Generator from './components/Generator';
import Showcase from './components/Showcase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path='react-animated-text-content-demo'
            element={<Showcase />}
          />
          <Route
            path='react-animated-text-content-demo/#/generator'
            element={<Generator />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
