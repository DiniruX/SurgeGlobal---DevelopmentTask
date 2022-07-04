import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AllUsers = () => {

    const [userList, setUserList] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/users')
            .then((res) => {
                console.log(res.data);
                setUserList(res.data);
            })
    }, [])

    return (
        <div>
            <h1>All Users</h1>

            <center><div className='card' style={{ width: '550px', backgroundColor: '#cccccc' }}>
                <div className='card-header'>Search User Here...</div>
                <div className="col-lg-3 mt-2 mb-2">
                    <input style={{ width: '200px', marginLeft: '30px', marginTop: '15px' }}
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
                                        <div className="model"><center>
                                            <div className="header" style={{ marginBottom: '10px' }}> <b>User Details</b> </div>
                                            <div className="content">
                                                ID: <br />
                                                First Name: <br />
                                                Last Name: <br />
                                                Email: <br />
                                                Date of Birth: <br />
                                                mobile No: <br />
                                                Status: <br />
                                                Account Type: <br />
                                            </div></center>
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
                                        <div className="model"><center>
                                            <div className="header" style={{ marginBottom: '10px' }}> <b>User Details</b> </div>
                                            <div className="content">
                                                ID: <br />
                                                First Name: <br />
                                                Last Name: <br />
                                                Email: <br />
                                                Date of Birth: <br />
                                                mobile No: <br />
                                                Status: <br />
                                                Account Type: <br />
                                            </div></center>
                                        </div>
                                    </Popup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers