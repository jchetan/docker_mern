import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        setShowLoading(true);
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/register",
                { email, password }
            )
            if (response.data.status === "success") {
                setRegistered(true);
            } else if (response.data.status === "user already exists") {
                alert("User already exists");
            } else {
                alert("Some error in Registration");
            }
            setShowLoading(false);
        } catch (error) {
            console.log("Register error", error)
        }
    }

    return (
        <div className="row justify-content-center my-2">

            {showLoading ?
                <div className="row text-center" >
                    <p>Please Wait...</p>
                </div>
                :
                registered ?
                    <div className="col-4 border">
                        <div className="text-center">
                            <h6>You have successfully Registered</h6>
                            <h6>Login using the below link</h6>
                            <Link to="/login" className="btn btn-primary mb-3 w-50">Login</Link>
                        </div>
                    </div>
                    :
                    <div className="col-4 border">
                        <div className="text-center">
                            <h2>Register</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <div className="">Email Error message</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <div className="">Password Error message</div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mb-3 w-50">Register</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <h6>Already Registered?</h6>
                            <Link to="/login" className="btn btn-primary mb-3 w-50">Login</Link>
                        </div>

                    </div>

            }


        </div>
    )
}

export default Register