import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';
import React, { Component } from 'react';
// import './../../public/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_MATCHUPS, {
//     fetchPolicy: "no-cache"
//   });

//   const matchupList = data?.matchups || [];

  return (
    <div>
     <section id="login">

<div class="row">

    <div class="col-md-6 col-sm-12 p-0 mb-0">
        <div
        class="img img-welcome"
        style="max-width:100%; height:auto; margin-bottom:0 !important;"
        >
        <img src="https://theuiaa.org/wp-content/uploads/2019/07/RCFA19-Korea-6.jpg" alt="background" class="img-fluid" />

        <div class="overlay-login p-3 ml-2">
            <h4>Login</h4>
            <form class="form login-form">
            <div class="form-group p-1">
                <label for="email-login">Email:</label>
                <br />
                <input class="form-input" type="text" id="email-login" />
            </div>

            <div class="form-group p-1">
                <label for="password-login">Password:</label>
                <br />
                <input class="form-input" type="password" id="password-login" />
            </div>

            <br />
            <h4>Welcome Back!!</h4>
            <br />
            <div class="form-group p-1">
                <button class="btn btn-primary login" type="submit">Login</button>
            </div>
            </form>
        </div>
        </div>
    </div>


    <div class="col-md-6 col-sm-12 p-0 mb-0">
        <div
        class="img img-welcome"
        style="max-width:100%; height:auto; margin-bottom:0 !important;"
        >
        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="stretch" class="img-fluid" />

        <div class="overlay-newUser p-3 ml-2">
            <h4>Create New User</h4>
            <form class="form create-form">

            <div class="form-group p-1">
                <label for="username-create">Userame:</label>
                <br />
                <input class="form-input1" type="text" id="create1" />
            </div>

            <div class="form-group p-1">
                <label for="email-create">Email:</label>
                <br />
                <input class="form-input2" type="text" id="create2" />
            </div>

            <div class="form-group p-1">
                <label for="password-create">Create password:</label>
                <br />
                <input class="form-input" type="password" id="password-create" />
            </div>

            <div class="form-group p-1">
                <label for="zipcode-create">Zipcode:</label>
                <br />
                <input class="form-input" type="zipcode" id="zipcode-create" />
            </div>

            <br />
            <div class="form-group p-2">
                <button
                class="btn btn-primary create"
                id="pushme"
                type="submit"
                >Create</button>
            </div>
            </form>
        </div>
        </div>
    </div>
</div>

<div class="ventureWelcome">
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

export default Home;
