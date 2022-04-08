
const Task = require("../models/Task");//üzerinde crud işlemleri yapacağımız şemayı import ediyoruz

const getAllTasks = async (req,res)=>{
try {
        const tasks =  await Task.find({})   
        res.status(200).json({tasks});
} catch (error) {
        res.status(500).json({msg:error.message}); 
}
}

const createTask = async (req,res)=>{
try {
const task = await Task.create(req.body);
res.status(201).json({task}); } catch (error) {
res.status(500).json({msg:error.message});   }
}

const getTask = async (req,res)=>{
        try {
                const {id:taskID} = req.params
                const task = await Task.findOne({_id:taskID})
                
                if (!task) {
                        return res.status(404).json({msg:`No task with id : ${taskID}`})  
                }
                
        res.status(201).json({task});
        } catch (error) {
                res.status(500).json({msg:error.message}); 
        }
}




const deleteTask = async (req,res)=>{
        try {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndDelete({_id:taskID});
        
        res.status(200).json({task});
        } catch (error) {
                res.status(500).json({msg:error.message}); 

        }
}

const  updateTask=  async (req,res)=>{
try{
        const {id:taskID} = req.params
        const task =  await Task.findByIdAndUpdate({_id:taskID},req.body,{
                new:true,
                runValidators:true,
        });

        if (!task) {
        return res.status(404).json({msg:`No task with id : ${taskID}`})  }

        res.status(200).json({task});

} catch (error) {
        res.status(500).json(error.message);
}
}


module.exports = {
getAllTasks,
getTask,
updateTask,deleteTask,createTask}