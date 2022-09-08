import './App.css';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
