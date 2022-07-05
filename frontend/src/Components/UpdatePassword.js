import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from './LoadingSpinner/LoadingSpinner'
import Swal from 'sweetalert2';


const UpdatePassword = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [status, setStatus] = useState("");
    const [accType, setAccType] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        function getPassword() {
            axios
                .get(`http://localhost:8000/users/${id}`)
                .then((res) => {
                    setPassword(res.data.password);
                    setRePassword(res.data.password);
                    setStatus(res.data.status)
                    setAccType(res.data.accoutType)
                    console.log("Current Password: ", res.data.password);
                    console.log("Current Status: ", res.data.status);
                    console.log("Current Account Type: ", res.data.accountType);
                })
        }
        getPassword();
    }, []);

    const handlePwChange = (e) => {

        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleRePwChange = (e) => {

        e.preventDefault();
        setRePassword(e.target.value);
    }

    const handleStatusChange = (e) => {

        e.preventDefault();
        setStatus(e.target.value);
    }

    const UpdatePassword = async (e) => {
        
        e.preventDefault();

        if (password !== rePassword) {
            alert("Passwords are not matching!")
        }
        else {
            setIsLoading(true);
            const dataSet = {
                password: password,
                status: '1',
            }

            console.log("Sending Password and Status Data...", dataSet);
            let data = await axios
                .put(`http://localhost:8000/users/${id}`, {
                    password: password,
                    status: '1',
                })
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Password Updated!',
                        text: 'Your password has been successfully updated...',
                    })
                    //alert('Update Success...');
                    if (accType === "Student") {
                        navigate(`/allnotes`);
                        setIsLoading(false);
                    }
                    else {
                        navigate('/allusers');
                        setIsLoading(false);
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: ' Update Failed!',
                        text: 'Error While Updating...',
                    })
                    console.log(err);
                })
            console.log("Updated Data: ", data);
        }



    }

    const renderUser = (
        <div style={{ marginTop: '30px', marginLeft: '35%' }}>

        </div>
    );

    return (
        <div>
            <h1>Update your password here...</h1>
            {isLoading ? <LoadingSpinner /> : renderUser}
            <div className='' style={{ marginTop: '30px', marginLeft: '35%' }}>
                <form>
                    <div className='form-group'>
                        <label>Password</label><br />
                        <input type='password' name='' value={password} onChange={(e) => handlePwChange(e)} className='form-control' style={{ width: '400px', marginBottom: '20px' }} />
                    </div>

                    <div className='form-group'>
                        <label>Re-Enter Password</label><br />
                        <input type='password' name='' value={rePassword} onChange={(e) => handleRePwChange(e)} className='form-control' style={{ width: '400px', marginBottom: '20px' }} />
                    </div>

                    <div className='form-group'>
                        <input type='hidden' name='status' value={status} onChange={(e) => handleStatusChange(e)} className='form-control' style={{ width: '400px', marginBottom: '20px' }} />
                    </div>

                    <button type='submit' onClick={(e) => UpdatePassword(e)} style={{ marginTop: '20px' }} className='btn btn-success' disabled={isLoading}>Update Password</button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword