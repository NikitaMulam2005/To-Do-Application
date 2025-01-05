const mongoose=require('mongoose')

const taskSchema=mongoose.Schema(
    {
        selected:{
            type:Boolean,
            default:false
        },
        task:{
            type:String,
            required:true
        },
        folder:{
            type:String,
            default:"Personal"
        },
        date:{
            type:String,
            required:true
        },
        start:{
            type:String,
            required:true
        },
        end:{
            type:String,
            required:true
        }

    }
);

module.exports= mongoose.model("task",taskSchema)