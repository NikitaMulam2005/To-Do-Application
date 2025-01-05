const FetchTasks = ({list, loading,handleChange}) => {
const update=list.slice().sort((a,b)=> new Date(a.date)- new Date(b.date))
let listDisplay;
if(list.length>4){
 listDisplay=update.slice(0,4)
}
else{
  listDisplay=update
}

  return (
    <div>
      {<div>
        {!loading ?(
          <div>{
        listDisplay && listDisplay.length >0?(
              <div key={listDisplay._id} style={{paddingRight:'20px',paddingLeft:'20px'}}>
                {listDisplay.map((list)=>(
                    <div>
                   <div style={{padding:'10px',display:'flex',justifyContent:'space-between', alignItems:'center'}}  id="box">
                    <div>
                     <input 
                     id={list._id}
                     type="checkbox"
                     checked={list.selected} 
                     onChange={()=>handleChange(list._id)}
                     style={{height:'1.5rem',width:'1.5rem', marginRight:'0.5rem', borderRadius:'10rem'}}
                     />
                     <label htmlFor={list._id}>{list.task}</label>
                     </div>
                     <p style={{fontSize:'10px', color:'rgb(166, 199, 190)'}}>{list.date}</p>
                    </div>
                    <p style={{textAlign:'center', color:'whitesmoke', fontSize:'1.1rem'}}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                    </div>
                ))
                }
                </div>
            ):(<p>No Tasks Recorded</p>)
        }
      </div>):(<p style={{textAlign:'center', margin:'auto auto',width:'100', color:'grey'}}>Loading...</p>)}
        </div>
}
    </div>
  )
}

export default FetchTasks