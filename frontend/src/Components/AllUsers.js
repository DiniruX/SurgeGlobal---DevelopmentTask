import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AllUsers = () => {

    return (
        <div>
            <h1>All Users</h1>
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
                        <tr>
                            <th>01</th>
                            <td>id00023</td>
                            <td>Kamal</td>
                            <td>kamal@gmail.com</td>
                            <td>Student</td>
                            <td>
                                <Popup
                                    trigger={<button className="btn btn-info btn-sm"> View Details </button>}
                                    modal
                                    nested
                                >
                                        <div className="model"><center>
                                            <div className="header" style={{marginBottom:'10px'}}> <b>User Details</b> </div>
                                            <div className="content">
                                                ID: <br/>
                                                First Name: <br/>
                                                Last Name: <br/>
                                                Email: <br/>
                                                Date of Birth: <br/>
                                                mobile No: <br/>
                                                Status: <br/>
                                                Account Type: <br/>
                                            </div></center>
                                        </div>
                                </Popup>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers