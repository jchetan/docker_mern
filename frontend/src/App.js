import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AllUsers from "./pages/AllUsers";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/all_users" element={<AllUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
