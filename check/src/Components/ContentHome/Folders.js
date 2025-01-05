import { IoIosArrowForward } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

const Folders = ({folder}) => {


const displayFolder=folder.slice(0,2)
  return (
    <div style={{height:'15rem', width:'20rem', backgroundColor:'white', borderRadius:'2rem'}} className="folder">
       <div>
            <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}>
            <h4>Folders</h4>
            <div style={{display:'flex'}}>
            <Link to="/folder" style={{textDecoration:'none'}}><h4 style={{color:'rgb(166, 199, 190)'}} >All</h4></Link>
            <IoIosArrowForward />
            </div>
            </div>
            <div style={{display:'flex',gap:'1rem', padding:'20px', flexShrink:'0', justifyContent:'space-evenly'}}>
              {displayFolder.map((folder)=>(<Link to={`/folderContent/${folder.id}`} style={{color:'black', textDecoration:'none'}}><div style={{width:'8rem', height:'8rem', backgroundColor:'rgb(178, 236, 236)', textAlign:'center', placeContent:'center', borderRadius:'2rem'}}>
                <FaFolder />
                <p>{folder.name}</p>
               </div></Link>))
               
}
            </div>
        </div>
        </div>
  )
}

export default Folders