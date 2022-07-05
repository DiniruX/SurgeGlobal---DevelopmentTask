import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Navbar = () => {

    const navigate = useNavigate();

    let accountType = localStorage.getItem('AccountType');

    const handleLogOut = () => {
        localStorage.removeItem("Token");
        localStorage.removeItem("AccountType");
        localStorage.removeItem("Email");
        localStorage.removeItem("Status");
        localStorage.removeItem("Id");
        // alert('Logged Out...');
        Swal.fire({
            icon: 'success',
            title: 'Logged Out!'
        })
        navigate("/");
    }

    const handleLogin = () => {
        navigate("/");
    }
    const handleReg = () => {
        navigate("/register");
    }

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">

                                {/*  Student Pages */}
                                <a style={{ display: accountType == "Student" ? "flex" : "none", textDecoration: "none", color:'white', marginRight:'20px', marginLeft:'20px' }} className="sidebarListItem" href="/addnote" aria-current="page">New Note</a>
                                <a style={{ display: accountType == "Student" ? "flex" : "none", textDecoration: "none", color:'white', marginRight:'20px', marginLeft:'20px' }} className="sidebarListItem" href="/allnotes" aria-current="page">All Notes</a>
                                
                            </div>
                        </div>
                    </div>
                    <button onClick={handleLogOut} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px", display: accountType == "Student" || accountType == "Admin" ? "flex" : "none" }}>
                        {"Logout"}
                    </button>

                    <button onClick={handleLogin} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px", display: !(accountType) ? "flex" : "none" }}>
                        {"Login"}
                    </button>

                    <button onClick={handleReg} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px", display: !(accountType) ? "flex" : "none" }}>
                        {"Register"}
                    </button>

                </nav>
            </div>
        </div>
    )
}

export default Navbar