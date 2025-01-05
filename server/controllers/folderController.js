const Folder=require('../models/folderModel')

exports.getFolders=async(req,res)=>{
        let response = {}
           try {
               let Folders = await Folder.find() //find all Folders from the database
       
               //creating the success response 
               response = {
                   message: "Successfully Fetched Folders",
                   status: "success",
                   data: Folders
               }
               //sending the success response
               res.status(200).json(Folders)
               //logging the request method and path for debbugging
               console.log(`${req.method}${req.path} ${response.message}`)
           } catch (err) {
               //logging the error for debbuging
               console.log(err)
               //creating the unsucess response
               response = {
                   message: "Failed To Fetch Folders",
                   status: "unsuccessful",
               }
               //sending the unsuccess response
               res.status(401).json(response)
           }
}

exports.addFolder=async(req,res)=>{
    let response = {}
        try {
            //requesting the data from client
            const {
               name
            } = req.body
    
            //checking the user have provided all the fields
            if(!name){
                response.mesage="Please Enter Name of The Folder"
                response.status="unsuccessful"
                return res.status(404).json(response)
            }
    
            //add new folder
            const folderAdd = await new Folder({ name })
            //save the changes in database
            await folderAdd.save()
            //create success response
            response = {
                message: 'Successfully Added Folder',
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
                message: 'Failed to Add Folder',
                status: 'unsuccessful'
            }
            //send the response
            res.status(401).json(response)
        }
}