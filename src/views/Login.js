import React from 'react';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Login.scss";


function Login() {

  let history = useHistory();
  const sendData = (data) => {
    axios.post("https://ecomerce-master.herokuapp.com/api/v1/login",data)
      .then((response) =>{
        console.log(response.data);
        window.localStorage.setItem("token",response.data.token)
        history.push('/');
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  const{inputs,handleInputChange,handleSubmit} = useForm(sendData,{});

  return (
    <div className="login">
      <Navbar />
      <form className="login__form my-5" onSubmit={handleSubmit}>

        <div className="login__container container my-5 py-5">

          <div className="row justify-content-center">

            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={inputs.email}
                  onChange={handleInputChange}
                  className="form-control"
                  name="email"
                  id="email"
                />
              </div>
            </div>

            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={inputs.password}
                  onChange={handleInputChange}
                  className="form-control"
                  name="password"
                  id="password"
                />
              </div>
            </div>

            <div className="col-md-12 text-center">
              <button type="submit" className="login__button btn">
                Login
                </button>
            </div>

          </div>

        </div>

      </form>

      <Footer />

    </div>
  )
}

export default Login;

