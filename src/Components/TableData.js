import React, { useEffect } from 'react'
import NavBar from './NavBar'
import {Link, useNavigate } from 'react-router-dom';

import './TableData.css'

function TableData(props) {
  const{tdata,alist,alistSet} = props;
    const navigate = useNavigate();  

    const callClick =()=>{
        //console.log(tdata);
        navigate('/register')
    }
    const callLogout =()=>{
      navigate('/login');
    }
    useEffect(() => {
      alistSet(tdata);
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
          window.history.pushState(null, document.title,  window.location.href);
        });
    },[])
    

  return (
    <div className='dataMain'>
        <NavBar/>

        <div class="container mt-5 px-2">
    
    <div class="mb-2 d-flex justify-content-between align-items-center">
        
        <div class="position-relative">
            <span class="position-absolute search"><i class="fa fa-search"></i></span>
            <input class="form-control w-100" placeholder="Search here"/>
        </div>
        <div class="px-2">
        <div className='Date'>
        <select className="form-select form-select-sm " aria-label=".form-select-sm example">
                <option selected>Date</option>
                <option value="1">Today</option>
                <option value="2">This Week</option>
                <option value="3">This Month</option>
                </select>
        </div>
        </div>
        <div class="px-1">
        <div className='Source'>
        <select className="form-select form-select-sm " aria-label=".form-select-sm example">
                <option selected>Source</option>
                <option value="1">Instagram</option>
                <option value="2">Facebook</option>
                <option value="3">TikTok</option>
                </select>
        </div>
        </div>

      
        <div class="px-2">
        <div className='Status'>
        <select className="form-select form-select-sm " aria-label=".form-select-sm example">
                <option selected>Status</option>
                <option value="1">New</option>
                <option value="2">Contacted</option>
                <option value="3">Not Intersted</option>
                </select>
        </div>
        </div>
        
        <div class="px-2">
               
        <button className="btn btn-outline-dark btn-sm px-5" type="submit"onClick={()=>callClick()}> New Lead</button>
        <button className="btn btn-outline-dark btn-sm px-1" type="submit"onClick={()=>callLogout()}> Logout</button>
        </div>
        
    </div>
    <div class="table-responsive">
    <table class="table table-responsive table-borderless">
        
      <thead>
        <tr class="bg-color">
          <th scope="col" width="10%">Status</th>
          <th scope="col" width="10%">Name</th>
          <th scope="col" width="10%">Email</th>
          <th scope="col" width="10%">Phone</th>
          <th scope="col" width="10%">Country</th>
          <th scope="col" width="10%">Interest</th>
          <th scope="col" width="10%">Source</th>
          <th scope="col" width="10%">Date</th>
          <th scope="col" class="text-end" width="50%"><span>Remarks</span></th>
        </tr>
      </thead>
  <tbody>
  
    {alist?alist.map((value)=>
      <tr class="table-success">
      <td>{value.status}</td>
      <td>{value.name}</td>
      <td><i class="fa fa-check-circle-o green"></i><span class="ms-1">{value.email}</span></td>
      <td>{value.phone}</td>
      <td>{value.country}</td>
      <td>{value.interest}</td>
      <td>{value.source}</td>
      <td>02-03-2023</td>
      <td class="text-end">{value.remarks}<i class="fa fa-ellipsis-h  ms-2"></i></td>
      </tr>
      ):'No record'
  }

   
  </tbody>
</table>
<ul class="pagination justify-content-end">
    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
  </ul>
</div>
</div>

   </div>
  )
}

export default TableData