const Note=require('../models/noteModel')

exports.fetchNotes=async(req,res)=>{
       let response = {}
       try {
           let Notes = await Note.find() //find all Notes from the database
   
           //creating the success response 
           response = {
               message: "Successfully Fetched Notes",
               status: "success",
               data: Notes
           }
           //sending the success response
           res.status(200).json(Notes)
           //logging the request method and path for debbugging
           console.log(`${req.method}${req.path} ${response.message}`)
       } catch (err) {
           //logging the error for debbuging
           console.log(err)
           //creating the unsucess response
           response = {
               message: "Failed To Fetch Notes",
               status: "unsuccessful",
           }
           //sending the unsuccess response
           res.status(401).json(response)
       }
}

exports.addNote=async(req,res)=>{
     let response = {}
        try {
            //requesting the data from client
            const {
            text
            } = req.body
    
            //checking the user have provided all the fields
            if(!text){
                response.mesage="Please Enter Note You Want To add"
                response.status="unsuccessful"
                return res.status(404).json(response)
            }
    
            //add new note
            const noteAdd = await new Note({ text})
            //save the changes in database
            await noteAdd.save()
            //create success response
            response = {
                message: 'Successfully Added Note',
                status: 'success'
            }
            //send the response and log the request method and path for debugging
            res.status(200).json(response)
            console.log(`${req.method}${req.path} ${response.message}`)
        } catch (err) {
            //logging the error for debugging
            console.log(err)
            //creating the failure response
            response = {
                message: 'Failed to Add Note',
                status: 'unsuccessful'
            }
            //send the response
            res.status(401).json(response)
        }
}

exports.updateNote=async(req,res)=>{
    let response={}
        try{
         
            //requesting the id as the parameter in url 
            const {id}=req.params
            //find the data with the id received and update it
            const noteUpdate=await Note.findOneAndUpdate({_id:id},{$set:req.body})
            await noteUpdate.save()
            //if id was received but no data with that id exist in database
        if(!noteUpdate){
            response.message="Note Not Found"
            response.status="unsuccessful"
            //send the failed response
            console.log(`${req.method}${req.path} ${response.message}`)
            return res.status(404).json(response)
        }else{
           
                response={
                    message:`Successfully Updated Note`,
                    status:'success'
                }
                //send the success response
                console.log(`${req.method}${req.path} ${response.message}`)
                res.status(200).json(response)
            }
    
        }catch(err){
            console.log(err)
            response.message="Failed To Update the Note"
            response.status="unsuccessful"
            //send the failed response
            res.status(401).json(response)
        }
}

exports.deleteNote=async(req,res)=>{
    let response = {}
        try {
            //requesting the id as the parameter in url 
            const { id } = req.params
            //deleting the note by finding the Note with _id
            const noteDeleted = await Note.findOneAndDelete({ _id: id })
            //received the id but it doesn't exist in database 
            if (!noteDeleted) {
                response.message = "Note Not Found"
                response.status = "unsuccessful"
                //sending the unsuccess response
                console.log(`${req.method}${req.path} ${response.message}`)
                return res.status(404).json(response)
            }
            //received and exist in database
            else {
                response.message = "Successfully Deleted Note"
                response.status = "success"
            }
            //sending the success response
            res.status(200).json(response)
            //logging the request method and path for debugging
            console.log(`${req.method}${req.path} ${response.message}`)
    
        } catch (err) {
            //logging the error for debugging
            console.log(err)
            response.message = "Failed to Delete Note"
            response.status = "unsuccessful"
            //sending the modified response
            res.status(401).json(response)
        }
}