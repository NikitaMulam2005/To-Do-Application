import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getAllPosts, getStatus,getError, fetchPosts} from "../../features/posts/postSlice";
import { Link } from "react-router-dom";
const Notes = () => {
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


  const orderedNotes=notes.slice().reverse()
  
  let content, contentPage;

  if(status==='loading')
    {content= <p style={{textAlign:'center', margin:'auto auto',width:'100', color:'grey'}}>Loading.....</p>}
  if(status==='failed') {content= <p>{error}</p>}  
  if(status==='succeeded') {
contentPage=orderedNotes.map((note)=>(
  
  <div>
  <p key={note.id}>{note.text}</p>
  <p style={{textAlign:'center', color:'whitesmoke', fontSize:'1.1rem'}}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
  </div>
  
))
content=contentPage.slice(0,5)

  }
  return (
    <div style={{height:'20rem', width:'20rem', backgroundColor:'white', borderRadius:'2rem'}} className="note">
      <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}>
            <h4>Notes</h4>
            <div style={{display:'flex'}}>
            <Link to="/notes" style={{textDecoration:'none'}}><h4 style={{color:'rgb(166, 199, 190)'}} >All</h4></Link>
            <IoIosArrowForward />
            </div>
        </div>
        <div style={{padding:'20px'}}>
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

export default Notes