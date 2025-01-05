const initDB=require('./config/initDB')
const express=require('express')
const cors=require('cors')
const app=express()
const path=require('path')
const taskRoute=require('./routes/taskRoute')
const noteRoute=require('./routes/noteRoute')
const folderRoute=require('./routes/folderRoute')
const { time } = require('console')
const PORT=5000


initDB();
app.use(cors(
   {origin:'http://localhost:3000'}
))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/task',taskRoute)
app.use('/notes',noteRoute)
app.use('/folder',folderRoute)

app.use('*',(req,res)=>{
   res.sendFile(path.join(__dirname,"/index.html"))
})

app.listen(PORT,()=>console.log("Server Running on port 5000"))