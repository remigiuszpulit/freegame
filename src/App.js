
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GameDetails from './components/GameDetails/GameDetails';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/games/:id" element={<GameDetails/>}></Route>
      </Routes>

      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
