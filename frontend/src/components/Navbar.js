import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Navbar = (props) => {

    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const handleLogout = () => {
        const logout = async () => {

            try {
                const response = await axios.get(
                    "http://localhost:5000/logout"
                )
                if (response.data.status === "success") {
                    props.setLoggedIn(false);
                    alert("You have successfully logged out");
                    navigate('/');
                } else {
                    console.log("Error while logging out")
                    alert("Error while logging out");
                }
            } catch (error) {
                console.log("Error Logout", error)
            }
        }
        logout();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <Link className="navbar-brand" to="/">MyApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            !props.loggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>
                        }

                        {
                            props.loggedIn &&
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={handleLogout}>Logout</button>
                            </li>
                        }

                        {
                            !props.loggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
                            </li>
                        }


                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/all_users">All Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
