import Calender from "./Calender"
import RecentTasks from "./RecentTasks"
import Folders from "./Folders"
import Notes from "./Notes"
import './content.css'
import Stats from "./Stats"

const Content = ({folder,handleChange,loading,setClick,list,days,months,years,Currentdate,setDate,month,setMonth,year,setYear,day,setDay}) => {
  return (
    <div style={{width:'100%'}}>
    <div className="main">
      <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
<RecentTasks
  list={list}
  loading={loading}
  handleChange={handleChange}
/>
<Stats
list={list}
/>
</div>
<div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
<Folders
folder={folder}/>
<Notes/>
</div>
    <div>
    <Calender
    setClick={setClick}
      days={days}
      months={months}
      years={years}
      Currentdate={Currentdate}
      setDate={setDate}
      month={month}
      setMonth={setMonth}
    year={year}
    setYear={setYear}
    day={day}
    setDay={setDay}
    />
    </div>
    </div>
    </div>
  )
}

export default Content