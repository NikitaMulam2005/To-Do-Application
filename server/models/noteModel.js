const mongoose=require("mongoose")

const noteSchema=mongoose.Schema(
    {
        text:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("note",noteSchema)