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
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('main/dashboard') ?"active" :""} href="/blue/app/main/dashboard"> Dashboard</a></li>
                 
                </ul>
              </li>
             
              
             
            
          
              <li className={pathname.includes('activities') ?"active" :""}> 
                <a href="/blue/app/administrator/activities"><i className="fa fa-exchange" /> <span>Copy Trade</span></a>
              </li>
              <li className={pathname.includes('administrator/users') ?"active" :""}> 
                <a href="/blue/app/administrator/users"><i className="la la-user-plus" /> <span>API Key List</span></a>
              </li>
              <li className={pathname.includes('administrator/position') ?"active" :""}> 
                <a href="/blue/app/administrator/position"><i className="la la-bell" /> <span>Position</span></a>
              </li>
              <li> 
                <a href="/blue/settings/companysetting"><i className="la la-cog" /> <span>Settings</span></a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);
