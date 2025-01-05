import './App.css';
import Nav from './Components/SideNav/Nav';
import Header from './Components/Header/Header';
import Content from './Components/ContentHome/Content';
import Recent from './Components/RecentTasks/Recent';
import FolderPage from './Components/Folder/FolderPage';
import Text from './Components/Notes/Text';
import AddTask from './Components/AddTask/AddTask';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import NoteAdd from './Components/AddNote/NoteAdd';
import UpdateNote from './Components/UpdateNote/UpdateNote';
import AddFolder from './Components/AddFolder/AddFolder';
import FolderContent from './Components/FolderContent/FolderContent';
function App() {
  const [search, setSearch] = useState('')
  const [click, setClick] = useState(false)
  const [list, setList] = useState([])
  const [folder,setFolder]=useState([])
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034']
  const [Currentdate, setDate] = useState(new Date().getDate())
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [day, setDay] = useState(new Date().getDay())
  const [loading, setLoading] = useState(true)

  const url = 'http://localhost:5000/task'
    const url1='http://localhost:5000/folder'
  useEffect(() => {
    const fetchTasks= async () => {
      try {
        const response = await axios.get(url)
        setList(response.data)
      }
      catch (err) {
        console.log(err.stack)
      } finally {
        setLoading(false)
      }
    }
    const fetchFolder= async()=>{
      try{
      const response= await axios.get(url1)
      setFolder(response.data)
      }
      catch(err)
      {
          console.log(err.stack)
      }
     }
   
   fetchFolder()
    setTimeout(() => {
      fetchTasks()
    }, 2000)
  }, [])
  console.log(list)
  let filteredList;

const handleDelete= async(id)=>{
try{
  console.log(id)
const remainingList=list.filter((list)=>list._id !== id)
setList(remainingList)
const response=await axios.delete(`${url}/${id}`)

}catch(err)
{
  console.log(err.stack)
}
}


  const handleChange = (id) => {
    console.log(id)
    const Part = list.find((list) => (list._id === id)).selected
    const updatedPart=!Part
    const updatedList = list.map((list) => (
      list._id === id ? { ...list, selected: !list.selected } : list
    ))
    updateCheck(id, updatedList, { selected: updatedPart })
  }


  const updateCheck = async (id, updatedCheck, partUpdated) => {
    const checkedUrl = `${url}/${id}`
    try {
      setList(updatedCheck)
      const response = await axios.patch(checkedUrl, partUpdated)
     
    } catch (err) {
      console.log(err.stack)
    }
  }



  if (click) {
    filteredList = list.filter((list) => list.date === `${months[month].slice(0, 3)} ${Currentdate}, ${year}`)
  }
  else {
    filteredList = list.filter((list) => (list.date).toLowerCase().includes(search.toLowerCase()) || (list.task).toLowerCase().includes(search.toLowerCase()))
  }

  useEffect(() => {
    setClick(false)
  }, [search])


  return (
    <div className="App">
      <Nav />
      <Header
        setSearch={setSearch}
        search={search}
      />
      <Routes>
        <Route path='/' element={<Content
          folder={folder}
          handleChange={handleChange}
          loading={loading}
          setClick={setClick}
          list={filteredList}
          setList={setList}
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
        />}></Route>
        <Route path='/recent' element={<Recent
          list={list.filter((list) => (list.date).toLowerCase().includes(search.toLowerCase()) || (list.task).toLowerCase().includes(search.toLowerCase()))}
          loading={loading}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />}></Route>
        <Route path='/folder' element={<FolderPage
        folder={folder} 
        />}></Route>
        <Route path='/notes' element={<Text />}></Route>
        <Route path='/addNote' element={<NoteAdd />}></Route>
        <Route path='/addFolder' element={<AddFolder 
        folder={folder}
        setFolder={setFolder}
        url1={url1}
        />}></Route>
        <Route path="/updateNote/:id" element={<UpdateNote />}></Route>
        <Route path="/folderContent/:id" element={<FolderContent 
        list={list}
        folder={folder}
        handleDelete={handleDelete}
        />}></Route>
        <Route path='/addTask' element={<AddTask 
      
        setList={setList}
        url={url}
        months={months}
        list={list}
        folder={folder}
        />}></Route>
      </Routes>
    </div>
  );
}

export default App;
