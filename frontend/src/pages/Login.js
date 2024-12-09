import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/login",
                { email, password }
            )
            setStatus(response.data.status)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="row justify-content-center my-2">
            <div className="col-4 border">
                <div className="text-center">
                    <h2>Login</h2>
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
                        <button type="submit" className="btn btn-primary mb-3 w-50">Login</button>
                    </div>

                    {
                        status &&
                        <div className="">
                            {status}
                        </div>

                    }
                </form>

                <div className="text-center">
                    <h6>Not Registered?</h6>
                    <Link to="/register" className="btn btn-primary mb-3 w-50">Register</Link>
                </div>


            </div>
        </div>

    )
}

export default Login