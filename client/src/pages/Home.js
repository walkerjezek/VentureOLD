import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';
import React, { Component, useState } from 'react';
// import './../../public/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Home = ({ setToken }) => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
//   const { loading, data } = useQuery(QUERY_MATCHUPS, {
//     fetchPolicy: "no-cache"
//   });

//   const matchupList = data?.matchups || [];

const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div>
     <section id="login">

<div className="row">

    <div className="col-md-6 col-sm-12 p-0 mb-0">
        <div
        className="img img-welcome"
        style= {{ maxWidth:"100%", height:"auto", marginBottom:"0 !important"}}
        >
        <img src="https://theuiaa.org/wp-content/uploads/2019/07/RCFA19-Korea-6.jpg" alt="background" className="img-fluid" />

        <div className="overlay-login p-3 ml-2">
            <h4>Login</h4>
            <form className="form login-form" onSubmit={handleSubmit}>
            <div className="form-group p-1">
                <label htmlFor="email-login">Email:</label>
                <br />
                <input className="form-input" type="text" id="email-login" onChange={e => setUserName(e.target.value)} />
            </div>

            <div className="form-group p-1">
                <label htmlFor="password-login">Password:</label>
                <br />
                <input className="form-input" type="password" id="password-login" onChange={e => setPassword(e.target.value)}/>
            </div>

            <br />
            <h4>Welcome Back!!</h4>
            <br />
            <div className="form-group p-1">
                <button className="btn btn-primary login" type="submit">Login</button>
            </div>
            </form>
        </div>
        </div>
    </div>


    <div className="col-md-6 col-sm-12 p-0 mb-0">
        <div
        className="img img-welcome"
        style= {{ maxWidth:"100%", height:"auto", marginBottom:"0 !important"}}
        >
        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="stretch" className="img-fluid" />

        <div className="overlay-newUser p-3 ml-2">
            <h4>Create New User</h4>
            <form className="form create-form">

            <div className="form-group p-1">
                <label htmlFor="username-create">Userame:</label>
                <br />
                <input className="form-input1" type="text" id="create1" />
            </div>

            <div className="form-group p-1">
                <label htmlFor="email-create">Email:</label>
                <br />
                <input className="form-input2" type="text" id="create2" />
            </div>

            <div className="form-group p-1">
                <label htmlFor="password-create">Create password:</label>
                <br />
                <input className="form-input" type="password" id="password-create" />
            </div>

            <div className="form-group p-1">
                <label htmlFor="zipcode-create">Zipcode:</label>
                <br />
                <input className="form-input" type="zipcode" id="zipcode-create" />
            </div>

            <br />
            <div className="form-group p-2">
                <button
                className="btn btn-primary create"
                id="pushme"
                type="submit"
                >Create</button>
            </div>
            </form>
        </div>
        </div>
    </div>
</div>

<div className="ventureWelcome">
    <h1>Welcome to Venture!</h1>
    <p>Have you ever wanted to go out and do something active but all your friends are busy? Venture aims to fix that. 
        This app enables you to create a profile, add your favorite activities and skill level, and be matched up with 
        others who are at your level and available when you are. 
    </p>
</div>


</section>
  </div>
  );
};

Home.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Home;
