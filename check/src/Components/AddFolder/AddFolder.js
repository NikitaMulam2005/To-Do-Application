import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFolder = ({ folder, setFolder,url1 }) => {
    const navigate=useNavigate()
    const [newFolder, setNewFolder] = useState('')
    const handleInputChange = (e) => {
        setNewFolder(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const addFolder = {
                id: nanoid(),
                name:newFolder
            }
            console.log(addFolder)
            const response = await axios.post(url1, addFolder)
            const newList = [...folder, addFolder]
            setFolder(newList)
           
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div style={{ width: '35rem', height: '75%', position: 'relative', top: '10%', left: '50%', borderRadius: '10px', backgroundColor: 'rgb(230, 238, 236)', padding: '20px', border: '1px solid rgb(166, 199, 190)', opacity: '0.8' }}>
                <h2>Add Folder</h2>
                <input
                    type="text"
                    placeholder="Folder name"
                    style={{ width: '100%', padding: '15px', margin: '10px 0', borderStyle: 'none', borderRadius: '5px' }}
                    onChange={(e) => handleInputChange(e)}
                    required
                />

                <br></br>
                <br></br>
                <br></br>


                <Link to="/"><button style={{ width: '6rem', height: '2rem', backgroundColor: 'white', borderStyle: 'none', borderRadius: '10px', marginRight: '0.5rem' }} className="btn">Cancel</button></Link>
                <button style={{ width: '6rem', height: '2rem', backgroundColor: 'white', borderStyle: 'none', borderRadius: '10px' }} className="btn" type="submit">Add</button>
            </div>
        </form>
    )
}

export default AddFolder