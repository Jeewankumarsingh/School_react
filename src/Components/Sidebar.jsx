import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.css'

function Sidebar() {
    return (
        <>
            <div className='Navbar d-flex'>
                <div className='col-lg-2 logo p-2'>
                    <img src="/image/logo.png" alt="logo" />
                </div>
                <div className='col-lg-10 bg-white p-2'>
                    <i className="bi bi-search p-2 border-0"></i>
                    <input className='border-0' type="text" placeholder='Find somethinf...' />
                </div>

            </div>

            <div className='col-lg-2 sidebar' style={{ backgroundColor: '#042954' }}>
                <ul className="nav flex-column p-1">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i class="bi bi-speedometer2 p-2"></i>
                            Dashboard </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-person-standing p-2"></i>
                            Students </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-people-fill p-2"></i>
                            Teachers </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-people p-2"></i>
                            Parents </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-book-fill p-2"></i>
                            Library</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-person-vcard p-2"></i>
                            Accont </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-pencil-fill p-2"></i>
                            Class </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-book-half p-2"></i>
                            Subject </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-calendar-day p-2"></i>
                            Class Routine </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-card-checklist p-2"></i>
                            Attendence </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-card-checklist p-2"></i>
                            Exam </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-bus-front p-2"></i>
                            Transport </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-hospital p-2"></i>
                            Hostel </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-filetype-js p-2"></i>
                            Notice </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-chat-left-text p-2"></i>
                            Message </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-menu-down p-2"></i>
                            UI Elements </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-globe-central-south-asia p-2"></i>
                            Map </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-gear-wide-connected p-2"></i>
                            Account </a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-10">

            </div>
        </>
    )
}

export default Sidebar