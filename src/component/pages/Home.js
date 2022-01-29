import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        loadUsers()
    },[]);

    const loadUsers = async ()=>{
        const response = await axios.get("http://localhost:3003/users")
        setUsers(response.data.reverse())
    }


  return (
        <div className='container'> 
                <div className='py-4'>
                    <h1>Home Page!</h1>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Email</th>
                            <th scope='col'>Phone Number</th>
                            <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,index)=>(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                        <Link className="btn btn-success m-2" to={`/users/${user.id}`}>
                                            View
                                        </Link>
                                        <Link className="btn btn-info m-2" to={`/users/edit/${user.id}`}>
                                            Edit
                                        </Link>
                                        </td>
                                     </tr>
                                ))
                            }
                        </tbody> 
                        </table>
                </div>

        </div>
  )
};

export default Home;
