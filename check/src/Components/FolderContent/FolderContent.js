import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
const FolderContent = ({list,folder,handleDelete}) => {
    const {id}= useParams()
    const selectedFolder=folder.find((folder)=> folder._id==id)
    const folderName=selectedFolder.name
  return (
    <div style={{width:'90vw',padding:'20px'}}>
    <div style={{display:'flex',justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
    <h3 style={{color:'rgb(166, 199, 190)'}}>Recent Tasks</h3>
    <Link to="/addTask" style={{textDecoration:'none', color:'black'}}><div style={{display:'flex',justifyContent:'flex-end', alignItems:'center', padding:'1rem'}} > <IoMdAdd/>
    <h2>Add Task</h2></div></Link>
    </div>
     <br></br>
     <br></br>
     {<div>
      
        <div>{
      list && list.length >0?(
            <div key={list._id} style={{paddingRight:'20px',paddingLeft:'20px'}}>
              {list.map((list)=>(
                  
                  <div>
                   {list.folder==folderName &&(
                    <div>
                 <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'space-around', alignItems:'center'}} >
                  <div style={{width:'100%',height:'100%',display:'flex', alignItems:'center'}}>
                   <input 
                   id={list._id}
                   type="checkbox"
                   checked={list.selected} 
                   onChange={()=>handleChange(list._id)}
                   style={{height:'1.5rem',width:'1.5rem', marginRight:'1rem', borderRadius:'10rem'}}
                   />
                   <div>
                   <label htmlFor={list._id}>{list.task}</label>
                   <p>{list.start} - {list.end}</p>
                   </div>
                   </div>
                   <p style={{fontSize:'1rem', color:'rgb(166, 199, 190)', width:'8rem'}}>{list.date}</p>
                   <RiDeleteBin5Fill 
                   onClick={()=>handleDelete(list._id)}
                   style={{width:'2rem', height:'2rem'}}/>
                  </div>
                  <p style={{textAlign:'center', color:'whitesmoke', fontSize:'4rem'}}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                  </div> )}</div>
 ))
              }
              </div>
          ):(<p>No Tasks Recorded</p>)
      }
    </div>
      </div>
}
  </div>
  )
}

export default FolderContent