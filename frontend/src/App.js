import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//react imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'

//Page imports
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AllUsers from "./pages/AllUsers";

//Component imports
import Navbar from "./components/Navbar";

import axios from 'axios'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      const checkLoginStatus = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/"
          )
          if (response.data.status === "logged_in") {
            setLoggedIn(true);
            setIsLoading(false);
          } else if (response.data.status === "not_logged_in") {
            setLoggedIn(false);
            setIsLoading(false);
          } else {
            alert("Error getting session status");
          }
        } catch (error) {
          console.log("Error checkLoginStatus", error)
        }
      }
      checkLoginStatus();
    },
    []
  );

  return (
    <div className='container'>
      {!isLoading &&
        <BrowserRouter>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn} />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />}></Route>
            <Route path="/all_users" element={<AllUsers />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
