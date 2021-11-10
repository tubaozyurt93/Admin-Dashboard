import React from 'react'
import avatar from "../../assets/avatar.svg"
import './Navbar.css';

 const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>  
             <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
            <a href="#">Subscribers</a>
            <a href="#">Video Management</a>
            <a className="active-link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
             <a href="#">
                 <i className="fa fa-search"></i>
             </a>
             <a href="#">
                 <i className="fa fa-clock-o"></i>
             </a>
             <a href="#">
                 <img width="30" src={avatar} alt="avatar"></img>
             </a>
            </div>
        </nav>
    )
}

export default Navbar;
