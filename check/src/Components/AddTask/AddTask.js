import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { FaPlus } from "react-icons/fa";


const AddTask = ({ setList, url, months, list ,folder}) => {
    const navigate = useNavigate()
    const [task, setTask] = useState('')
    const [inputFolder, setInputFolder] = useState('')
    const [date, setDate] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const handleTaskChange = (e) => {
        setTask(e.target.value)
    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleStartChange = (e) => {
        setStart(e.target.value)
    }
    const handleEndChange = (e) => {
        setEnd(e.target.value)
    }
    const handleFolderChange = (e) => {
        setInputFolder(e.target.value)
    }
console.log(inputFolder)
    const dateAdd = date.slice(8, 10)
    const index = date.slice(5, 7) - 1
    const month = months[index]
    const year = date.slice(0, 4)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newTask = {
                selected: false,
                task: task,
                folder:inputFolder,
                date: `${month.slice(0, 3)} ${dateAdd}, ${year}`,
                start: start,
                end: end
            }
            const newList = [...list, newTask]
            setList(newList)
            const response = await axios.post(url, newTask)
         
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div style={{ width: '40rem', height: '87%', position: 'relative', top: '10%', left: '40%', borderRadius: '10px', backgroundColor: 'rgb(230, 238, 236)', padding: '20px', border: '1px solid rgb(166, 199, 190)', opacity: '0.8' }}>
                <h1>Add Task</h1>
                <input
                    type="text"
                    placeholder="Task"
                    style={{ width: '100%', padding: '15px', margin: '10px 0', borderStyle: 'none', borderRadius: '5px' }}
                    onChange={(e) => handleTaskChange(e)}
                    required
                />
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaFolder
                            style={{ margin: '10px', height: '1rem', width: '1rem' }} />
                           <select style={{borderStyle:'none',backgroundColor:'rgb(230, 238, 236)'}}
                           onChange={(e)=>handleFolderChange(e)}>
                            
                            {folder.map((folder)=>(
                                <option>{folder.name}</option>
                            ))

                            }
                           </select>
                    </div>
                    <Link to="/addFolder" style={{ color: 'black', textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}><p>Add Folder</p>
                            <FaPlus style={{ margin: '5px', height: '0.8rem', width: '1rem' }} /></div></Link>

                </div>
                <br></br>
                <input
                    type="date"
                    placeholder="Eg. Nov 26, 2024"
                    style={{ padding: '1rem', width: '100%', margin: '1rem 0', borderStyle: 'none', borderRadius: '5px' }}
                    onChange={(e) => handleDateChange(e)}
                    required
                />
                <br></br>
                <br></br>
                <h3>Start & End Time</h3>
                <input
                    type="time"
                    style={{ padding: '1rem', width: '50%', margin: '1rem 5px', borderStyle: 'none', borderRadius: '5px' }}
                    onChange={(e) => handleStartChange(e)}
                    required
                />
                <input
                    type="time"
                    style={{ padding: '1rem', width: '48%', margin: '1rem 0', borderStyle: 'none', borderRadius: '5px' }}
                    onChange={(e) => handleEndChange(e)}
                    required
                />
                <br></br>
                <br></br>


                <Link to="/recent"><button style={{ width: '6rem', height: '2rem', backgroundColor: 'white', borderStyle: 'none', borderRadius: '10px', marginRight: '0.5rem' }} className="btn">Cancel</button></Link>
                <button style={{ width: '6rem', height: '2rem', backgroundColor: 'white', borderStyle: 'none', borderRadius: '10px' }} className="btn" type="submit">Add</button>
            </div>
        </form>
    )
}

export default AddTask;