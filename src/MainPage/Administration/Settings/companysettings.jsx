/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Settings extends Component {

   render() {
     
      return ( 
       <div className="page-wrapper">
       <Helmet>
           <title>Settings</title>
           <meta name="description" content="Login page"/>					
       </Helmet>
       {/* Page Content */}
       <div className="content container-fluid">
         <div className="row">
           <div className="col-md-8 offset-md-2">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title"> Settings</h3>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             <form>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label> Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" defaultValue="Dreamguy's Technologies" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Mobile Number</label>
                     <input className="form-control" defaultValue="818-635-5579" type="text" />
                   </div>
                 </div>
                 </div>
                 
               <div className="row">
                 <div className="col-sm-12">
                   <div className="form-group">
                     <label>Address</label>
                     <input className="form-control " defaultValue="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>Country</label>
                     <select className="form-control select">
                       <option>India</option>
                       
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>City</label>
                     <input className="form-control" defaultValue="Delhi" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>State/Province</label>
                     <select className="form-control select">
                       <option>Delhi</option>
                      
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>Postal Code</label>
                     <input className="form-control" defaultValue={110092} type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Email</label>
                     <input className="form-control" defaultValue="chandan@example.com" type="email" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Phone Number</label>
                     <input className="form-control" defaultValue="818-978-7102" type="text" />
                   </div>
                 </div>
               </div>
               
               <div className="submit-section">
                 <button className="btn btn-primary submit-btn">Save</button>
               </div>
             </form>
           </div>
         </div>
       </div>
       {/* /Page Content */}
     </div>
      );
   }
}

export default Settings;
