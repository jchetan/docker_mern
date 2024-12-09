import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            const fetchUsers = async () => {

                try {
                    const response = await axios.get(
                        "http://localhost:5000/fetch_users"
                    )
                    setUsers(response.data.users)
                    console.log(response)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchUsers();
        },
        []
    );

    return (
        <div className='container'>
            {(users.length === 0) &&
                <div className="row justify-content-center" >
                    <div className="card" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">No Users</h5>
                        </div>
                    </div>
                </div>
            }

            {(users.length !== 0) && users.map((user) => {
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
            })}
        </div>
    )
}
export default AllUsers