import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import Swal from 'sweetalert2';

const UpdateNote = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

        function getNote() {
            axios
                .get(`http://localhost:8000/notes/${id}`)
                .then((res) => {
                    setTitle(res.data.title);
                    setDescription(res.data.description);
                    console.log("Note Details: ", res.data);
                })
        }
        getNote();
    }, []);

    const handleTitleChange = (e) => {

        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {

        e.preventDefault();
        setDescription(e.target.value);
    }

    const UpdateNote = async (e) => {
        e.preventDefault();

        if (title.length <= 2) {
            alert("Enter a valid title. Title too short...")
        }
        else{
            const dataSet = {
            title: title,
            description: description,
        }

        console.log("Sending Note Data...", dataSet);
        let data = await axios
            .put(`http://localhost:8000/notes/${id}`, {
                title: title,
                description: description,
            });
            console.log("Updated Data: ", data);
            if (data.status !== 200) {
                Swal.fire({
                    icon: 'error',
                    title: ' Update Failed!',
                    text: 'Error While Updating...',
                })
            }
            else {
                Swal.fire({
                    icon: 'success',
                    title: 'Note Update!',
                    text: '',
                })
                navigate('/allnotes');
        }

        
        
    }
}


    return (
        <div>
            <div className='container' style={{ backgroundColor:'#00802b', marginTop:'20px', padding:'10px'}}>
               <center><h1 style={{color:'white'}}>Update Note</h1> </center>
            </div>
            <div className='container' style={{ marginTop: '30px', backgroundColor: "#d9d9d9", padding:'10px 20% 10px 20%' }}>
                <form onSubmit={(e) => UpdateNote(e)}>
                    <div className='form-group'>
                        <label>Title</label><br />
                        <input type='text' name="title" value={title} onChange={(e) => handleTitleChange(e)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>Description</label><br />
                        <textarea rows='5' name="description" value={description} onChange={(e) => handleDescriptionChange(e)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                    </div>

                    <button type='submit' style={{ marginTop: '20px' }} className='btn btn-success'>Update Note</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateNote