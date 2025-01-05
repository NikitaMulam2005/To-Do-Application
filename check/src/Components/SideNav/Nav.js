
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { LuFolderSearch } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import { MdResetTv } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Navbar">
          <img src="/Images/image.png" width="100rem" height="100rem" style={{display:'block', mixBlendMode:'multiply'}}></img>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'50%'}}>
          <Link to="/" style={{color:'white'}}>
          <IoHome 
          style={{width:'2rem', height:'2rem'}}/>
          </Link>
          <Link to="/recent" style={{color:'white'}}>
          <FaTasks   
          style={{width:'2rem', height:'2rem'}}/>
          </Link>
          <Link to="/folder" style={{color:'white'}}>
          <LuFolderSearch   
          style={{width:'2rem', height:'2rem'}}/>
          </Link>
       
          <Link to="/notes" style={{color:'white'}}>
          <MdEditNote 
          style={{width:'2rem', height:'2rem'}}/>
          </Link>
          </div>
          <Link to="" style={{color:'inherit'}}>
          <MdResetTv 
           style={{width:'2rem', height:'2rem'}}/>
           </Link>
        </div>
       
  )
}

export default Nav