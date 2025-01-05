import { FaPen } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux"
import { getAllPosts, getStatus,getError, fetchPosts,deletePost} from "../../features/posts/postSlice";
import { Link } from "react-router-dom";
const Text = () => {
  const dispatch=useDispatch()
  const notes=useSelector(getAllPosts)
  const status=useSelector(getStatus)
  const error=useSelector(getError)

  useEffect(()=>{
    if(status==='idle')
    {
        dispatch(fetchPosts())
    }
  },[dispatch])

const handleDelete=(id)=>{
  dispatch(deletePost(id))
}
  const orderedNotes=notes.slice().reverse()
  
  let content, contentPage;

  if(status==='loading')
    {content= <p style={{textAlign:'center', margin:'auto auto',width:'100', color:'grey'}}>Loading.....</p>}
  if(status==='failed') {content= <p>{error}</p>}  
  if(status==='succeeded') {
content=orderedNotes.map((note)=>(
  
  <div>
    <div style={{display:'flex', justifyContent:'space-between', padding:'0.5rem'}}>
  <p key={note._id}>{note.text}</p>
  <div>
  <Link to={`/updateNote/${note._id}`} style={{color:'black'}}><FaPen style={{marginRight:'1rem'}}/></Link>
  <RiDeleteBin5Fill 
  onClick={()=>handleDelete(note._id)}/>
  </div>
  </div>
  <p style={{textAlign:'center', color:'whitesmoke', fontSize:'3rem'}}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
  </div>
  
))

  }
  return (
    <div style={{height:'100vh', width:'90vw', backgroundColor:'white', borderRadius:'2rem'}} className="note">
      <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}>
            <h2 style={{color:'rgb(166, 199, 190)'}}>Notes</h2>
            <Link to="/addNote" style={{color:'black', textDecoration:'none'}}>
            <div style={{display:'flex'}} >
              <p style={{marginRight:'0.5rem'}}>Add Note </p>
            <FaPlus />
            </div>
            </Link>
        </div>
        <div style={{padding:'1.5rem'}}>
          {status!='loading'?(
          <div>
        {content &&  content.length>0  ?(
         
          <p>{content}</p>
     
        ):(
          <p>No Notes Recorded</p>)
        }
        </div>):(<p>{content}</p>)
}
        </div>
        </div>
  )
}

export default Text