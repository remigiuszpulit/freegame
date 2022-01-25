
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>

      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
