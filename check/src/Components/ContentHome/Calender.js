import { useState,useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Calender = ({setClick,days,months,years,Currentdate,setDate,month,setMonth,year,setYear,day,setDay}) => {

 
    const [rows,setRows]=useState([])
   
    useEffect(()=>{
        const apply=()=>{
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const getFirstDay = new Date(year, month, 1).getDay()
    
    
        const totalCells = 6 * 7
        const grid = []
        let count = 1;
        for (let i = 0; i < totalCells; i++) {
            if (i < getFirstDay || count > daysInMonth) {
                grid[i] = null
            }
            else {
                grid[i] = count
                count++
            }
    
        }
    
        const rows = []
        for (let i = 0; i < grid.length; i += 7) {
            rows.push(grid.slice(i, i + 7))
        }
        setRows(rows)
    }
    apply();
    },[year,month]);
    

    const handleDateChange = (date) => {
        setDate(date)
        setDay(new Date(year,month,date).getDay())
        setClick(true)
    }
    const handleMonthChange1 = (month) => {
        if(month>0){
        setMonth(month-1)
        }
        else{
        setMonth(11)
        setYear(year - 1)
        }
    }
    const handleMonthChange2 = (month) => {
        if(month<11)
        {
        setMonth(month+1)
        }
        else{
            setMonth(0)
            setYear(year + 1)
        }
    }
    const handleYearChange = (e) => {
        setYear(Number(e.target.value))
        
    }

    return (
        <div style={{width:'35 rem', height:'100%', backgroundColor:'rgb(230, 238, 236)', position:'sticky', right:'0', padding:'0.8rem', borderRadius:'1rem'}}>
        <div style={{ width: '20rem', height: '29rem', borderRadius: '1rem', backgroundColor: 'white' , display:'flex', flexDirection:'column', justifyContent:'space-evenly', placeItems:'center'}} className="profile-calender">
           <div style={{marginBottom:'3rem'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4>{days[day]}, {months[month]} {Currentdate}</h4>
                <select
                 onChange={(e) => handleYearChange(e)}
                style={{borderStyle:'none', backgroundColor:'white'}}>
                    {years.map((year) => (
                        <option>
                            {year}
                        </option>
                    ))

                    }
                </select>
            </div>
            <br></br>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div onClick={()=>handleMonthChange1(month)}>
                    <IoIosArrowBack />
                    <IoIosArrowBack />
                </div>
              <h3 style={{color:'rgb(166, 199, 190)'}}>{months[month]}</h3>
                <div onClick={()=> handleMonthChange2(month)}>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                </div>
            </div>
            <br></br>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'auto', height: '100%'}}>
                <thead style={{ width: '100%' }}>
                    <tr>
                        {days.map((day) => (
                            <th style={{ backgroundColor: 'rgb(230, 238, 236)', padding: '10px' }}>{day.slice(0, 1)}</th>
                        ))
                        }
                    </tr>
                </thead>
                <tbody style={{ width: '100%' }}>

                    {rows.map((index) => (

                        <tr key={index} >
                            {
                                index.map((date) => (

                                    <td key={date} style={{ padding: '10px', textAlign: 'center', cursor: 'pointer' }} onClick={() => handleDateChange(date)} className={`${date === Currentdate ? "selected" : ""}`}>
                                        {date !== null ? (<div>{date}</div>) : (<div>{''}</div>)}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                    }

                </tbody>

            </table>
            </div>
        </div>
        </div>
    )
}

export default Calender