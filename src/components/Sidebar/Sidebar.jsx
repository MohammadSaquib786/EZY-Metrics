import React from 'react'
import './Sidebar.css'
import  logo from '../../assets/logo.png'
import { MdDashboardCustomize } from "react-icons/md";
import { SiGoogleadsense } from "react-icons/si";
import { SiSimpleanalytics } from "react-icons/si";
import { BiSolidReport } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  return (
     
       <div className='Sidebar'>
         <div className='upper-level'>
         <img className='logo' src={logo} alt="" />
        <button className="sidebuttons" onClick={() => navigate('/')}> <MdDashboardCustomize /> Dashboard</button>
        <button className="sidebuttons" onClick={() => navigate('/leadspage')}> <SiGoogleadsense style={{marginRight:'10px'}} />Leads</button>
        <button className="sidebuttons" onClick={() => navigate('/analyticspage')}> <SiSimpleanalytics  style={{marginRight:'10px'}} />Analytics</button>
        <button className="sidebuttons" onClick={() => navigate('/reportspage')}> <BiSolidReport  style={{marginRight:'10px' }} />Reports</button>
       </div>
        <div className='userprofile'>
        <FaUserCircle style={{color:'#CECECE', cursor:'pointer'}}/>
        <h5>User</h5>
        </div>
    </div>
  )
}
export default Sidebar
