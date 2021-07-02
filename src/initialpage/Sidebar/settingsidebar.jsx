/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <a href="/blue/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></a>
              </li>
              <li className="menu-title">Settings</li>
              <li className={pathname.includes('companysetting') ?"active" :""}> 
                <a href="/blue/settings/companysetting"><i className="la la-building" /> <span>My Profile Settings</span></a>
              </li>
              
             
              
              <li className={pathname.includes('-password') ?"active" :""}> 
                <a href="/blue/settings/change-password"><i className="la la-lock" /> <span>Change Password</span></a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);
