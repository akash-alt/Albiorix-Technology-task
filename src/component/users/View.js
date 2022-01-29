import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
    const [user, setUser] = useState({
        name:"",
        dob:"",
        email:"",
        phone:""
      });

      const { id } = useParams();
        useEffect(() => {
            loadUser();
        }, []);

        const loadUser = async () => {
            const response = await axios.get(`http://localhost:3003/users/${id}`);
            setUser(response.data);
          };
  return (
    <div className="container py-4">
      <Link className="btn btn-warning" to="/" style={{color:"#fff"}}>
        Back to Home Page
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">dob: {user.dob}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        
      </ul>
    </div>
  );
};

export default View;
