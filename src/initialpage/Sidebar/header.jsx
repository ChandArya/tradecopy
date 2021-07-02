/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {headerlogo,lnEnglish,lnFrench,lnSpanish,lnGerman, Avatar_02,Avatar_03,Avatar_05,
  Avatar_06,Avatar_08,Avatar_09,Avatar_13,Avatar_17,Avatar_21} from '../../Entryfile/imagepath'

class Header extends Component {

   render() {
    const {  location } = this.props
    let pathname = location.pathname
    
      return (
         <div className="header" style={{right:"0px"}}>
        {/* Logo */}
        <div className="header-left">
          <a href="/blue/app/main/dashboard" className="logo">
            <img src={headerlogo} width={40} height={40} alt="" />
          </a>
        </div>
        {/* /Logo */}
        <a id="toggle_btn" href="" style={{display: pathname.includes('tasks') ?"none" :pathname.includes('compose') ? "none" :""}}>
          <span className="bar-icon"><span />
            <span />
            <span />
          </span>
        </a>
        {/* Header Title */}
        <div className="page-title-box">
          <h3>Fintinity Pvt Ltd.</h3>
        </div>
        {/* /Header Title */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars" /></a>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Search */}
          <li className="nav-item">
            <div className="top-nav-search">
              <a href="" className="responsive-search">
                <i className="fa fa-search" />
              </a>
              <form action="/blue/app/pages/search">
                <input className="form-control" type="text" placeholder="Search here" />
                <button className="btn" type="submit"><i className="fa fa-search" /></button>
              </form>
            </div>
          </li>
          {/* /Search */}
      
          {/* Notifications */}
        
          {/* Message Notifications */}
    
          <li className="nav-item dropdown has-arrow main-drop">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <span className="user-img"><img src={Avatar_21} alt="" />
                <span className="status online" /></span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
            
              <a className="dropdown-item" href="/blue/login">Logout</a>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="/blue/app/profile/employee-profile">My Profile</a>
            <a className="dropdown-item" href="/blue/settings/companysetting">Settings</a>
            <a className="dropdown-item" href="/blue/login">Logout</a>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
       
      );
   }
}

export default withRouter(Header);