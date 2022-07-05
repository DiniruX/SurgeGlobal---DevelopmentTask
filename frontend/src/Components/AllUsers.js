import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AllUsers = () => {

    const [userList, setUserList] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

    useEffect(() => {
        axios.get(`http://localhost:8000/users?page=${pageNumber}`)
            //.then((response) => response.json())

            .then((res) => {
                console.log(res.data)
                setUserList(res.data.users);
                setNumberOfPages(res.data.totalPages);
            });

    }, [pageNumber]);

    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
    };

    const gotoNext = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
    };

    return (
        <div>
            <div className='container' style={{ backgroundColor: '#00134d', marginTop: '20px', padding: '10px', marginBottom: '30px' }}>
                <center><h1 style={{ color: 'white' }}>All Users</h1> </center>
            </div>

            <center><div className='container' style={{ width: '550px', backgroundColor: '#d9d9d9' }}>
                <div className='card-header'>Search User Here...</div>
                <div className="">
                    <input style={{ width: '400px', marginTop: '15px' }}
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }} />
                </div>
                <table style={{ width: '400px', marginLeft: '30px' }} className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.filter((val) => {
                            if (searchTerm == "") {
                                <p>Not Found...</p>
                            } else if (val.email.includes(searchTerm)) {
                                return val;
                            } else if (val.firstName.includes(searchTerm)) {
                                return val;
                            }
                        }).map((val, index) => (
                            <tr key={index}>
                                <td>{val.userId}</td>
                                <td>{val.firstName}</td>
                                <td>{val.email}</td>
                                <td>{val.accountType}</td>
                                <td>
                                <Popup
                                        trigger={<button className="btn btn-info btn-sm"> View Details </button>}
                                        modal
                                        nested>
                                        <div className="model" style={{backgroundColor: "#d9d9d9", padding:'0 10% 0 10%'}}>
                                            <div className="header" style={{ marginBottom: '10px', paddingTop:'10px' }}> <h3>User Details</h3> </div>
                                            <div className="content" style={{}}>
                                                <label>ID:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.userId} disabled/><br />
                                                <label>First Name:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.firstName} disabled/><br />
                                                <label>Last Name:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.lastName} disabled/><br />
                                                <label>Email:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.email} disabled/><br />
                                                <label>Date of Birth:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.dateOfBirth} disabled/><br />
                                                <label>mobile No:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.mobile} disabled/><br />
                                                <label>Account Type:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.accountType} disabled/><br />
                                            </div>
                                        </div>
                                    </Popup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></center>


            <div className='container' style={{ marginTop: '30px' }}>
                <table className='table table-hover table-dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((val, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{val.userId}</td>
                                <td>{val.firstName}</td>
                                <td>{val.email}</td>
                                <td>{val.accountType}</td>
                                <td>
                                    <Popup
                                        trigger={<button className="btn btn-info btn-sm"> View Details </button>}
                                        modal
                                        nested>
                                        <div className="model" style={{backgroundColor: "#d9d9d9", padding:'0 10% 0 10%'}}>
                                            <div className="header" style={{ marginBottom: '10px', paddingTop:'10px' }}> <h3>User Details</h3> </div>
                                            <div className="content" style={{}}>
                                                <label>ID:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.userId} disabled/><br />
                                                <label>First Name:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.firstName} disabled/><br />
                                                <label>Last Name:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.lastName} disabled/><br />
                                                <label>Email:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.email} disabled/><br />
                                                <label>Date of Birth:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.dateOfBirth} disabled/><br />
                                                <label>mobile No:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.mobile} disabled/><br />
                                                <label>Account Type:</label><br />
                                                <input className='form-control' style={{ marginBottom: '10px' }} value={val.accountType} disabled/><br />
                                            </div>
                                        </div>
                                    </Popup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-lg justify-content-center">
                    <li class="page-item">
                        <a class="page-link" onClick={gotoPrevious} tabindex="-1">Previous</a>
                    </li>
                    {pages.map((pageIndex) => (
                        <li class="page-item">
                            <a class="page-link" key={pageIndex} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</a>
                        </li>
                    ))}
                    <li class="page-item">
                        <a class="page-link" onClick={gotoNext}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AllUsers