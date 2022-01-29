import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import {useHistory} from 'react-router-dom'

const AddUser = () => {
    // let history = useHistory();
    
    const [user,setUser] = useState({
        name:"",
        dob:"",
        email:"",
        phone:""
    })
    const [userError,setUserError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const {name,dob,email,phone} = user;
    const onInputChange = e => {
        setUser( {...user,[e.target.name]:e.target.value} );
      };

      const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user)
        // history.push("/");
        setUserError(validate(user))
        setIsSubmit(true);
      }

      useEffect(() => {
        console.log(userError);
        if (Object.keys(userError).length === 0 && isSubmit) {
          console.log(user);
        }
      }, [userError]);

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "Name is required!";
        }
        if (!values.dob) {
            errors.dob = "dob is required!";
          } else if (regex.test(values.dob)) {
            errors.dob = "This is not a valid dob format!";
          }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
          errors.phone = "Phone is required";
        } else if (values.phone.length < 4) {
          errors.password = "Phone must be more than 4 characters";
        } else if (values.phone.length > 10) {
          errors.phone = "Phone cannot exceed more than 10 characters";
        }
        return errors;
      };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Create User</h2>
        <Link className="btn btn-warning" to="/" style={{color:"#fff",marginBottom:'20px'}}>
        Back to Home Page
      </Link>
     
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <p style={{color:'red'}}>{userError.name}</p>
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
           <p style={{color:'red'}}>{userError.dob}</p> 
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <p style={{color:'red'}}>{userError.email}</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your 10 digits Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <p style={{color:'red'}}>{userError.phone}</p>
          <button className="btn btn-success btn-block" style={{color:"#fff",marginTop:'20px'}}>Add User</button>
        </form>
        
      </div>
    </div>

  )
};

export default AddUser;
