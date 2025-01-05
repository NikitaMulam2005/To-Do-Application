import { FaFolder } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const FolderPage = ({folder}) => {
  return (
    <div style={{height:'100vh', width:'90vw', backgroundColor:'white', borderRadius:'2rem'}} className="folder">
       <div>
            <div style={{padding:'20px'}}>
              <div style={{display:'flex', alignItems:'center'}}>
            <h2 style={{marginRight:'1rem',color:'blue'}}>Folders</h2>
            <Link to="/addFolder" style={{color:'lavender'}}><FaPlus /></Link>
            </div>
            </div>
           
            <div style={{display:'flex',gap:'1rem', padding:'20px', flexShrink:'0'}}>
              {folder.map((folder)=>( <Link to={`/folderContent/${folder._id}`} style={{color:'black', textDecoration:'none'}}><div style={{width:'10rem', height:'10rem', backgroundColor:'papayawhip', textAlign:'center', placeContent:'center', borderRadius:'2rem'}}>
               <FaFolder />
                <p>{folder.name}</p>
               </div>
               </Link>
               ))
               
}
            </div>
          
        </div>
        </div>
  )
}

export default FolderPage