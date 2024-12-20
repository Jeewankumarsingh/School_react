import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.css'

function Sidebar() {

    const [openDropdown, SetOpenDropdown] = useState(null);

    const handleDeopdownClick = (dropdownName) => {
        if (openDropdown === dropdownName) {
            SetOpenDropdown(null);
        } else {
            SetOpenDropdown(dropdownName);
        }
    }

    return (
        <>
            <div className='Navbar d-flex'>
                <div className='col-lg-2 logo p-2'>
                    <img src="/image/logo.png" alt="logo" />
                    
                </div>
                <div className='navbar2 col-lg-10 d-flex bg-white p-2'>
                    <div className='search text-secondary col-lg-10'>
                        <i className="bi bi-search p-2 border-0"></i>
                        <input type="text" placeholder='Find something...' />
                    </div>
                    <div className='icon col-lg-2 d-flex justify-content-around'>
                        <i className="bi bi-person-circle text-secondary h3"></i>
                        <i className="bi bi-envelope text-secondary"></i>
                        <i className="bi bi-bell text-secondary"></i>
                        <i className="bi bi-globe-central-south-asia"><span className='globe text-secondary'> EN</span></i>
                    </div>
                </div>

            </div>

            <div className='col-lg-2 sidebar'>
                <ul className="nav flex-column p-1">
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('dashboard')} className="nav-link text-light">
                            <i class="bi bi-speedometer2 p-2"></i>
                            Dashboard <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'dashboard' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Admin</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Students</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Parents</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Teachers</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('Students')} className="nav-link text-light">
                            <i className="bi bi-person-standing p-2"></i>
                            Students <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'Students' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>All Students</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Student Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Admission Form</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Student Promotion</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('Teachers')} className="nav-link text-light">
                            <i className="bi bi-people-fill p-2"></i>
                            Teachers <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'Teachers' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>All Teachers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Teachers Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Add Teachers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Payment</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('Parents')} className="nav-link text-light">
                            <i className="bi bi-people p-2"></i>
                            Parents <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'Parents' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>All Parents</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Teachers Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Add Teachers</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('Library')} className="nav-link text-light">
                            <i className="bi bi-book-fill p-2"></i>
                            Library <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'Library' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>All Book</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Add New Book</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('Accont')} className="nav-link text-light">
                            <i className="bi bi-person-vcard p-2"></i>
                            Accont <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'Accont' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>All Fees Collection</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Expenses</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Add Expenses</a>
                                </li>
                            </ul>
                        )}


                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('Class')} className="nav-link text-light">
                            <i className="bi bi-pencil-fill p-2"></i>
                            Class <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'Class' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>All Classes</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Add New Class</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-book-half p-2"></i>
                            Subject </a>
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-calendar-day p-2"></i>
                            Class Routine </a>
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-card-checklist p-2"></i>
                            Attendence </a>
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('Exam')} className="nav-link text-light">
                            <i className="bi bi-card-checklist p-2"></i>
                            Exam <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'Exam' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Exam Schedule</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Exam Grades</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-bus-front p-2"></i>
                            Transport </a>
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-hospital p-2"></i>
                            Hostel </a>
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-filetype-js p-2"></i>
                            Notice </a>
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-chat-left-text p-2"></i>
                            Message </a>
                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" onClick={() => handleDeopdownClick('UI Elements')} className="nav-link text-light">
                            <i className="bi bi-menu-down p-2"></i>
                            UI Elements <i class="bi bi-chevron-right float-end"></i></a>

                        {openDropdown === 'UI Elements' && (
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Alert</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Button</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Grid</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Modal</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Progress Bar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Tab</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white"><i class="bi bi-chevron-right p-2"></i>Widget</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <hr/>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-light">
                            <i className="bi bi-globe-central-south-asia p-2"></i>
                            Map </a>
                    </li>
                    <hr/>
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












// < li class="nav-item sidebar-nav-item active" >
//                         <a href="#" class="nav-link"><i class="flaticon-dashboard"></i><span>Dashboard</span></a>
//                         <ul class="nav sub-group-menu menu-open" style="display: block;">
//                             <li class="nav-item">
//                                 <a href="index.html" class="nav-link"><i class="fas fa-angle-right"></i>Admin</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="index3.html" class="nav-link"><i class="fas fa-angle-right"></i>Students</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="index4.html" class="nav-link"><i class="fas fa-angle-right"></i>Parents</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="index5.html" class="nav-link"><i class="fas fa-angle-right"></i>Teachers</a>
//                             </li>
//                         </ul>
//                     </li >