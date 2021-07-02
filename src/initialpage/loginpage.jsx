/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'

class Loginpage extends Component {

   state = {
      email: 'demo@example.com',
      password: 'test#123'
   }
      
   loginclick(){
    // this.props.history.push("/blue/app/main/dashboard")
    localStorage.setItem("firstload","true")
   }


   render() {
     
      return (
         
         
         <div className="main-wrapper">
           <Helmet>
               <title>Login - HRMS Admin Template</title>
               <meta name="description" content="Login page"/>					
         </Helmet>
        <div className="account-content">
          <center>
       
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="/blue/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <form action="/blue/app/main/dashboard">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      <div className="col-auto">
                        <a className="text-muted" href="/blue/forgotpassword">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="form-group text-center">
                    <a className="btn btn-primary account-btn" href="/blue/app/main/dashboard">
                    Login</a>
                  </div>
                  <div className="account-footer">
                    <p>Don't have an account yet? <a href="/blue/register">Register</a></p>
                  </div>
                </form>
                {/* /Account Form */}
              </div>
            </div>
          </div>
          </center>
        </div>
      </div>
      );
   }
}

export default Loginpage;
