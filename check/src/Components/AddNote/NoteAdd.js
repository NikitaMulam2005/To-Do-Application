import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { addPost } from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


const NoteAdd = () => {
    const [note,setNote]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const newNote={
     text:note
    }
    const handleSubmit=(e)=>{
     dispatch(addPost(newNote))
     e.preventDefault()
     navigate('/notes')
    }
    const handleInputChange=(e)=>{
    setNote(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
    <div style={{ width: '35rem', height: '75%', position: 'relative', top: '10%', left: '50%',borderRadius:'10px', backgroundColor: 'rgb(230, 238, 236)', padding: '20px',border:'1px solid rgb(166, 199, 190)',opacity:'0.8'}}>
        <h2>Add Note</h2>
        <input
            type="text"
            placeholder="Note"
            style={{ width: '100%', padding: '15px', margin: '10px 0', borderStyle: 'none', borderRadius: '5px'}}
            onChange={(e)=>handleInputChange(e)}
            required
        />
       
        <br></br>
        <br></br>
        <br></br>

        
        <Link to="/notes"><button style={{width:'6rem', height:'2rem', backgroundColor:'white', borderStyle:'none', borderRadius:'10px',marginRight:'0.5rem'}} className="btn">Cancel</button></Link>
        <button style={{width:'6rem', height:'2rem',backgroundColor:'white', borderStyle:'none', borderRadius:'10px'}} className="btn" type="submit">Add</button>
    </div>
    </form>
  )
}

export default NoteAdd