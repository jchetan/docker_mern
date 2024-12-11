//bootstrap imports
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
//package imports
import axios from 'axios'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');

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
            setUser(response.data.user_email);
          } else if (response.data.status === "not_logged_in") {
            setLoggedIn(false);
          } else {
            alert("Error getting session status");
          }
          setIsLoading(false);
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
      {
        !isLoading &&
        <BrowserRouter>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home user={user} />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>}></Route>
            <Route path="/all_users" element={<AllUsers />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
