import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const AllNotes = () => {

    let userEmail = localStorage.getItem('Email');

    const navigate = useNavigate();

    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/notes?email=${userEmail}`)
            .then((res) => {
                console.log(res.data);
                setNotesList(res.data);
            })
    }, [])

    const deleteNote = async (id) => {

        let data = await axios
            .delete(`http://localhost:8000/notes/${id}`)
            .then(() => {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Note Deleted!',
                    text: 'Your note has been successfully deleted from the system...',
                })
                //window.location.reload(false);
            })
    }

    return (
        <div>
            <div className='container' style={{ backgroundColor:'#00802b', marginTop:'20px', padding:'10px'}}>
               <center><h1 style={{color:'white'}}>All Notes</h1> </center>
            </div>
            <div className='container' >
                <section class="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px' }}>
                    {notesList.map((val, index) => (
                        <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor:'#d9d9d9' }}>
                            <h4>{val.title}</h4>
                            <p>{val.description}</p>
                            <div style={{margin:'0px'}} class="btn-group" role="group" aria-label="Basic example">
                                <a className='btn btn-primary' href={`/updatenote/${val?._id}`}>Update Note</a>
                                <a className='btn btn-danger' onClick={(e) => deleteNote(val?._id)} >Delete Note</a>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default AllNotes