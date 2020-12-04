import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
//import payload from "../utils/payload";
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from "@fortawesome/free-brands-svg-icons";
//import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";



function Navbar() {
  const [user,setUser] = useState({});

  //useState([]) o useState({}) ?????

  useEffect(() =>{
    const token = window.localStorage.getItem('token');
    const config = {
        headers:{
            Authorization: `JWT ${token}`
        }
    }
    axios.get("https://ecomerce-master.herokuapp.com/api/v1/user/me",config)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })

  },[])

  return (
    
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark d-flex justify-content-between">
      <Link className="navbar__brand navbar-brand px-1" to="/">
        Productos
      </Link>
      
      <div className="navbar__links collapse navbar-collapse mr-2" id="navbarNav">
        {user ? (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/profile">
                {/* ! Hola, {user.user.first_name} ! */}
                HOLA :(
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>          
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        )}
      </div>
      
      <form className="navbar__search-bar form-inline text-center mr-2 collapse navbar-collapse">

          <label className="sr-only " forHtml="searchCategory">Categories</label>
          <select className="custom-select collapse navbar-collapse" id="searchCategory">
            <option selected>All Categories</option>
            <option value="1">Books</option>
            <option value="2">Movies</option>
            <option value="3">Music</option>
            <option value="4">Games</option>
            <option value="5">Electronics</option>
            <option value="6">Computers</option>
            <option value="7">Home</option>
            <option value="8">Garden</option>
            <option value="9">Tools</option>
            <option value="10">Grocery</option>
            <option value="11">Health</option>
            <option value="12">Beauty</option>
            <option value="13">Toys</option>
            <option value="14">Kids</option>
            <option value="15">Baby</option>
            <option value="16">Clothing</option>
            <option value="17">Shoes</option>
            <option value="18">Jewelery</option>
            <option value="19">Sports</option>
            <option value="20">Outdoors</option>
            <option value="21">Automotive</option>
            <option value="22">Industrial</option>
          </select>

        <label className="sr-only" forHtml="homeSearch">Search</label>
        <div className="input-group">
          {/* <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div> */}
          <input type="text" className="form-control" id="homeSearch" placeholder="Search"></input>
        </div>
        <button type="submit" className="navbar__search-button btn">Search</button>

      </form>

      <div className="navbar__profile ml-2 collapse navbar-collapse justify-content-end">
        {/* <i className="fab fa-user-circle"><FontAwesomeIcon icon={faUserCircle} size="3x"/></i> */}
        <i className="fab fa-user-circle"><FontAwesomeIcon icon={faUser} size="2x"/></i>
      </div>

      <button
        className="navbar__toggler-button navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fab fa-bars navbar__toggler-icon m-1 navbar-collapse" ><FontAwesomeIcon icon={faBars} size="2x"/></i>
      </button>

    </nav>
  );
}
export default Navbar;
