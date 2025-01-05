const express=require('express')
const router=express.Router()
const taskController=require('../controllers/taskController')

router.get('/',taskController.fetchTask)
router.post('/',taskController.addTask)
router.delete('/:id',taskController.deleteTask)
router.patch('/:id',taskController.getCheck)


module.exports=router