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
          <Route path='/' element={<Showcase />} />
          <Route path='/generator' element={<Generator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
