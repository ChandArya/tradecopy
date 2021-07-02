/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_11, Avatar_05, Avatar_10, Avatar_09, Avatar_02, Avatar_21,Avatar_19 } from '../../Entryfile/imagepath';
// ES6 import or TypeScript
import firebase from "firebase/app";
import "firebase/database";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"
import { io } from "socket.io-client";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.clientsRef = firebase.database().ref('user')
    this.state = {
     
       data : [
         {id:1,image:Avatar_02,name:"Chandan Kumar",role:"Web Designer",email:"chand123",company :"50",mobile:'9876543210',joindate:"1 Jan 2021",role:"Active"},
         {id:2,image:Avatar_05,name:"Intsham",role:"Web Developer",email:"intsham098",company :"120",mobile:'9876543210',joindate:"18 Mar 2014",role:"Active"},
         {id:3,image:Avatar_11,name:"Aditya Pachwariya",role:"Android Developer",email:"aditya456",company :"60",mobile:'9876543210',joindate:"1 Apr 2014",role:"Pending"},
         {id:4,image:Avatar_21,name:"Ram Kumar",role:"IOS Developer",email:"ram890",company :"10",mobile:'9876543210',joindate:"1 Apr 2014",role:"Inactive"},
       ],          
    };
  }
  componentDidMount=()=>
  {

  }
   render() {
    const{data} = this.state
    const columns = [
      
      {
        title: 'Name',
        dataIndex: 'name',
        
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Clinet ID',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
      },

      {
        title: 'Percent to copy',
        dataIndex: 'company', 
       
      },
    
      {
        title: 'Created Date',
        dataIndex: 'joindate',
        sorter: (a, b) => a.joindate.length - b.joindate.length,
      },
   
    ]
      return ( 
            <div className="page-wrapper">
              <Helmet>
                 <title>Fintinity</title>
                 <meta name="description" content="Login page"/>					
              </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">COPY FROM</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/blue/app/main/dashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active">COPY FROM</li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
                {/* /Page Header */}
                {/* Search Filter */}
                <div className="row filter-row">
                  
                  <div className="col-sm-6 col-md-3"> 
                    <div className="form-group form-focus select-focus">
                      <select className="select floating"> 
                        <option>Select Copy From Client</option>
                        <option>SUNI1963</option>
                        <option>HMOLLA</option>
                        <option>PHONIXG</option>
                        <option>GPGROVER</option>
                      </select>
                      <label className="focus-label">Copy From Client</label>
                    </div>
                    </div>
                  
                  <div className="col-sm-6 col-md-3">  
                    <a href="#" className="btn btn-success btn-block"> UPDATE </a>  
                  </div>     
                </div>
                {/* /Search Filter */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="table-responsive">
                    <Table className="table-striped"
                        pagination= { {total : data.length,
                          showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                        style = {{overflowX : 'auto'}}
                        columns={columns}                 
                        // bordered
                        dataSource={data}
                        rowKey={record => record.id}
                        onChange={this.handleTableChange}
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
             
              
            </div>

      );
   }
}

export default Activities;
