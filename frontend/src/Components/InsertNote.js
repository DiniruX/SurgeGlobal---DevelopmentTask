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
                text: 'Your note has been successfully inserted into the system...',
            })
            navigate('/allnotes');

        }

    }



    return (
        <div>
            <h1>Insert Notes here...</h1>
            <div className='container' style={{ marginTop: '30px', marginLeft: '760px' }}>
                <form>
                    <div className='form-group'>
                        <label>Title</label><br />
                        <input type='text' value={title} className='form-control' style={{ width: '400px', marginBottom: '20px' }} onChange={(e) => handleTitleChange(e)} />
                    </div>

                    <div className='form-group'>
                        <label>Description</label><br />
                        <textarea rows='5' name={description} className='form-control' style={{ width: '400px', marginBottom: '20px' }} onChange={(e) => handleDescriptionChange(e)} />
                    </div>

                    <button type='submit' style={{ marginTop: '20px' }} onClick={(e) => addNote(e)} className='btn btn-success'>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default InsertNote