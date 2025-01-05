const Task = require('../models/taskModel')


exports.fetchTask = async (req, res) => {
    let response = {}
    try {
        let tasks = await Task.find() //find all tasks from the database

        //creating the success response 
        response = {
            message: "Successfully Fetched Tasks",
            status: "success",
            data: tasks
        }
        //sending the success response
        res.status(200).json(tasks)
        //logging the request method and path for debbugging
        console.log(`${req.method}${req.path} ${response.message}`)
    } catch (err) {
        //logging the error for debbuging
        console.log(err)
        //creating the unsucess response
        response = {
            message: "Failed To Fetch Tasks",
            status: "unsuccessful",
        }
        //sending the unsuccess response
        res.status(401).json(response)
    }
}



exports.addTask = async (req, res) => {
    let response = {}
    try {
        //requesting the data from client
        const {
            task,
            folder,
            date,
            start,
            end
        } = req.body

        //checking the user have provided all the fields
        if(!task){
            response.mesage="Please Enter Task You Want To add"
            response.status="unsuccessful"
            return res.status(404).json(response)
        }if(!date){
            response.message="Please Enter The Date For Completion Of Task"
            response.status="unsuccessful"
            return res.status(400).json(response)

        }if(!start){
            response.message="Please Enter The Start Time For Task"
            response.status="unsuccessful"
            return res.status(404).json(response)
        }if(!end){
            response.message="Please Enter the End Time For Task"
            response.status="unsuccessful"
            return res.status(404).json(response)
        }


        //add new task
        const taskAdd = await new Task({ task, folder, date, start, end })
        //save the changes in database
        await taskAdd.save()
        //create success response
        response = {
            message: 'Successfully Added Task',
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
            message: 'Failed to Add Task',
            status: 'unsuccessful'
        }
        //send the response
        res.status(401).json(response)
    }
}



exports.deleteTask = async (req, res) => {
    let response = {}
    try {
        //requesting the id as the parameter in url 
        const { id } = req.params
        //deleting the task by finding the task with _id
        const taskDeleted = await Task.findOneAndDelete({ _id: id })
        //received the id but it doesn't exist in database 
        if (!taskDeleted) {
            response.message = "Task Not Found"
            response.status = "unsuccessful"
            //sending the unsuccess response
            console.log(`${req.method}${req.path} ${response.message}`)
            return res.status(404).json(response)
        }
        //received and exist in database
        else {
            response.message = "Successfully Deleted Task"
            response.status = "success"
        }
        //sending the success response
        res.status(200).json(response)
        //logging the request method and path for debugging
        console.log(`${req.method}${req.path} ${response.message}`)

    } catch (err) {
        //logging the error for debugging
        console.log(err)
        response.message = "Failed to Delete Task"
        response.status = "unsuccessful"
        //sending the modified response
        res.status(401).json(response)
    }
}


exports.getCheck = async(req,res) => {
    let response={}
    try{
     
        //requesting the id as the parameter in url 
        const {id}=req.params
        //find the data with the id received and update it
        const dataCheck=await Task.findOneAndUpdate({_id:id},{$set:req.body})
        await dataCheck.save()
        //if id was received but no data with that id exist in database
    if(!dataCheck){
        response.message="Task Not Found"
        response.status="unsuccessful"
        //send the failed response
        console.log(`${req.method}${req.path} ${response.message}`)
        return res.status(404).json(response)
    }else{
       
            response={
                message:`Successfully Updated Task Selection`,
                status:'success'
            }
            //send the success response
            console.log(`${req.method}${req.path} ${response.message}`)
            res.status(200).json(response)
        }

    }catch(err){
        console.log(err)
        response.message="Failed To Update the Check Request"
        response.status="unsuccessful"
        //send the failed response
        res.status(401).json(response)
    }
}