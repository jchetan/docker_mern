import React, {useState} from 'react'
import { Link } from 'react-router-dom'; 
import axios from 'axios'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/register",
                {email, password}
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }        
    }

    return (
        <div className="row justify-content-center my-2">
            <div className="col-4 border">
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
                    </div>                    
                    <button type="submit" className="btn btn-primary mb-3">Register</button>
                    <h6>Already Registered?</h6>
                    <Link to="/login" className="btn btn-primary mb-3">Login</Link>
                </form>
            </div>
        </div>

    )
}

export default Register