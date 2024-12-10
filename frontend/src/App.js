import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AllUsers from "./pages/AllUsers";
import { Navbar } from "./components/Navbar";
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="/all_users" element={<AllUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
