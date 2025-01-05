import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = ({setSearch,search}) => {

  const handleChange=(e)=>{
setSearch(e.target.value)
  }
  return (
    <div style={{padding:'1rem',display:'flex', justifyContent:'space-between', height:'5rem', width:'100%', alignItems:'center'}} className="header">
    
        <div style={{display:'flex', width:'65%', justifyContent:'space-between', alignItems:'center'}}>
        <h1>DashBoard</h1>
         <input
         id="unique"
         type="text"
         value={search}
         onChange={(e)=>handleChange(e)}
         style={{width:'30rem', height:'2.5rem', borderRadius:'1rem', border:'0', backgroundColor:'rgb(230, 238, 236)',padding:'10px'}}
         />
         <FaSearch 
         style={{position:'relative', right:'4rem'}}/>
         </div>
         <div >
         <IoIosNotifications 
         style={{width:'2rem', height:'2rem',marginRight:'1.4rem'}}/>
         <CgProfile 
          style={{width:'2rem', height:'2rem', marginRight:'1rem'}}/>
         </div>
         
    </div>
  )
}

export default Header