import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Nav />} />

        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
