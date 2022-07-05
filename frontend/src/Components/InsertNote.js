import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const InsertNote = () => {

    const navigate = useNavigate();
    let userEmail = localStorage.getItem('Email');

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {

        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {

        e.preventDefault();
        setDescription(e.target.value);
    }

    const addNote = async (e) => {
        e.preventDefault();

        if (title.length <= 2) {
            alert("Enter a valid title. Title too short...")
        }
        else {
            const dataSet = {
                title: title,
                description: description,
                email: userEmail
            }

            console.log("Sending Note Data...", dataSet);
            let data = await axios.post('http://localhost:8000/notes', {
                title: title,
                description: description,
                email: userEmail
            });
            console.log("Saved Data: ", data);
            if (data.status !== 200) {
                Swal.fire({
                    icon: 'error',
                    title: ' Insert Failed!',
                    text: 'Error While Inserting...',
                })
            }
            else {
                Swal.fire({
                    icon: 'success',
                    title: 'Note Inserted!',
                    text: '',
                })
                navigate('/allnotes');

            }
        }



    }



    return (
        <div>
            <div className='container' style={{ backgroundColor:'#00802b', marginTop:'20px', padding:'10px'}}>
               <center><h1 style={{color:'white'}}>Insert Note</h1> </center>
            </div>
            <div className='container' style={{ marginTop: '30px', backgroundColor: "#d9d9d9", padding:'10px 20% 10px 20%' }}>
                <form onSubmit={(e) => addNote(e)}>
                    <div className='form-group'>
                        <label>Title</label><br />
                        <input type='text' value={title} className='form-control' style={{ marginBottom: '20px' }} onChange={(e) => handleTitleChange(e)} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>Description</label><br />
                        <textarea rows='5' name={description} className='form-control' style={{ marginBottom: '20px' }} onChange={(e) => handleDescriptionChange(e)} required='true' />
                    </div>

                    <button type='submit' style={{ marginTop: '20px' }} className='btn btn-success'>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default InsertNote