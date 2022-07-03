import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AllNotes = () => {

    const navigate = useNavigate();

    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/notes')
            .then((res) => {
                console.log(res.data);
                setNotesList(res.data);
            })
    }, [])

    const deleteNote = async (id) => {

        let data = await axios
            .delete(`http://localhost:8000/notes/${id}`)
            .then(() => {
                alert('Delete Success...');
                navigate('/allnotes');
            })
    }

    return (
        <div>
            <h1>All Notes</h1>
            <div className='container' style={{ marginTop: '30px' }}>
                <table className='table table-hover table-light'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notesList.map((val, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{val.title}</td>
                                <td>{val.description}</td>
                                <td>
                                    <a className='btn btn-warning' href={`/updatenote/${val?._id}`}>Update Note</a>&nbsp;
                                    <a className='btn btn-danger' onClick={(e) => deleteNote(val?._id)} >Delete Note</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllNotes