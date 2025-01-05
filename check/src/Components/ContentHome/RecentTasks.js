import { IoIosArrowForward } from "react-icons/io";
import FetchTasks from "./FetchTasks";
import { Link } from "react-router-dom";

const RecentTasks = ({list,loading,handleChange}) => {
    
  

 

  return (
    <div style={{width:'25rem', height:'21rem', backgroundColor:'white', borderRadius:'2rem'}} className="task">
        <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}>
            <h4>Recent Tasks</h4>
            <div style={{display:'flex'}}>
           <Link to="/recent" style={{textDecoration:'none'}}> <h4 style={{color:'rgb(166, 199, 190)'}} >All</h4>  </Link>
            <IoIosArrowForward />
          
        </div>
        </div>
             <FetchTasks
             list={list}
             loading={loading}
             handleChange={handleChange}
             />
    </div>
  )
}

export default RecentTasks