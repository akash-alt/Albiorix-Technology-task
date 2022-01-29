import React, { useState,useEffect } from 'react';
import axios from 'axios';
// import {useHistory} from 'react-router-dom'
import {Link, useParams } from 'react-router-dom';

const EditUser = () => {
    // let history = useHistory();
    const {id} = useParams()
    // alert(id)
    const [user,setUser] = useState({
        name:"",
        dob:"",
        email:"",
        phone:""
    })

    const {name,dob,email,phone} = user;
    const onInputChange = e => {
        setUser( {...user,[e.target.name]:e.target.value} );
      };

      useEffect(()=>{
          loadUser()
      },[])

      const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user)
        // history.push("/");
      }

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
         setUser(result.data);
        // console.log(result)
      };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <Link className="btn btn-warning" to="/" style={{color:"#fff",marginBottom:'20px'}}>
            Back to Home Page
       </Link>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <input
            
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your DOB"
              name="dob"
              value={dob}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group" >
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-success btn-block" style={{color:"#fff",marginTop:'20px'}}>update User</button>
        </form>
      </div>
    </div>

  )
};

export default EditUser;
