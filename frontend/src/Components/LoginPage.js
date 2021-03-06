import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';

const LoginPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {

        setIsLoading(true);
        e.preventDefault();

        console.log("Inserted Data: ", formData)
        let data = await axios
            .post('http://localhost:8000/users/signin', formData)
        console.log("data", data?.data)

        if (formData.email) {
            if (formData.password) {
                try {
                    localStorage.setItem("Token", data?.data?.token);
                    localStorage.setItem("AccountType", data?.data?.user?.accountType);
                    localStorage.setItem("Email", data?.data?.user?.email);
                    localStorage.setItem("Status", data?.data?.user?.status);
                    localStorage.setItem("Id", data?.data?.user?._id);

                    //alert('Login Success...');
                    if (data?.data?.user?.status == false) {
                        navigate(`/updatepword/${data?.data?.user?._id}`);
                        setIsLoading(false);
                    }
                    else if (data?.data?.user?.accountType === "Student") {
                        navigate(`/allnotes`);
                        setIsLoading(false);
                    }
                    else {
                        navigate('/allusers');
                        setIsLoading(false);
                    }
                }
                catch (err) {
                    console.log(err);
                    //alert("Error While Logging!!!", err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed!',
                        text: 'Oops... Error While Logging!!!',
                    })
                }
            }
            else {
                setIsLoading(false);
                //alert("Invalid Password!!!")
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed!',
                    text: 'Oops... Invalid Password!!!',
                })
            }
        }
        else {
            setIsLoading(false);
            //alert("Invalid Email Address!!!")
            Swal.fire({
                icon: 'error',
                title: 'Login Failed!',
                text: 'Oops... Invalid Email Address!!!',
            })
        }
    };

    const renderUser = (
        <div style={{ marginTop: '30px', marginLeft: '35%' }}>

        </div>
    );

    return (
        <div>
            <div className='container' style={{ backgroundColor: '#00134d', marginTop: '20px', padding: '10px' }}>
                <center><h1 style={{ color: 'white' }}>User Login</h1> </center>
            </div>
            {isLoading ? <LoadingSpinner /> : renderUser}
            <div className='container' style={{ marginTop: '30px', backgroundColor: "#d9d9d9", padding:'10px 20% 10px 20%' }}>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                        <label>Email</label><br />
                        <input type='email' name='email' value={email} onChange={(e) => onChange(e)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>Password</label><br />
                        <input type='password' name='password' value={password} onChange={(e) => onChange(e)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                    </div>

                    <button type='submit' style={{ marginBottom: '10px' }} className='btn btn-success' disabled={isLoading}>Login</button>
                </form>
                <div>
                    Don't you have an account? <a href='/register'>Register here</a>
                </div>

            </div>

        </div>
    )
}

export default LoginPage