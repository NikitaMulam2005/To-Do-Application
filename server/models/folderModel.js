const mongoose=require('mongoose')

const folderSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true

        }

    }
);

module.exports= mongoose.model("folder",folderSchema)