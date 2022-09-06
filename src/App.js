import './App.css';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
