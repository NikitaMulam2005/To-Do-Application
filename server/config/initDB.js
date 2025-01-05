const mongoose = require('mongoose');
require("dotenv").config();

const initDB=()=>{
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on("connected",()=>{
        console.log("Database Connected Successfully")
    })
    db.on("error",(err)=>{
        console.log(err)
    })
    db.on("disconnected",()=>{{
        console.log("Disconnected")
    }})
    
}

module.exports=initDB
