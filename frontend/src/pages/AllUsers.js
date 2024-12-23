import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    axios.defaults.withCredentials = true;

    useEffect(
        () => {
            setIsLoading(true);
            const fetchUsers = async () => {
                try {
                    const response = await axios.get(
                        "http://localhost:5000/fetch_users"
                    )
                    if (response.data.status === "success") {
                        if (response.data.users.length > 0) {
                            setUsers(response.data.users);
                        }
                        setIsLoading(false);
                    } else {
                        alert("Error getting users");
                    }

                } catch (error) {
                    console.log("Error fetchUsers", error)
                }
            }
            fetchUsers();
        },
        []
    );

    return (
        <div className='container'>
            {isLoading ?
                <div className="row text-center" >
                    <p>Loading...</p>
                </div>
                :
                !users ?
                    <div className="row justify-content-center" >
                        <div className="card" style={{ width: "25rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">No Users</h5>
                            </div>
                        </div>
                    </div>
                    :
                    users.map((user) => {
                        return (
                            <div key={user._id} className="row justify-content-center" >
                                <div className="card" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Email: {user.email}</h5>
                                        <p className="card-text">Password: {user.password}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}
export default AllUsers