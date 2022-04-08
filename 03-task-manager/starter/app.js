const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const port = 3000
const tasks = require("./routes/tasks")
require("dotenv").config();//Accesing the MONGO URL
const notFound = require("./middleware/not-found");
//middlewares
app.use(express.json());//recognize the incoming request as a JSON
app.use(express.static("./public"));//Front end files

/**************************/
app.use("/api/v1/tasks",tasks);//routers
app.use(notFound);//router not found middleware

/*
app.get("/api/v1/tasks")     --get all the tasks
app.post("/api/v1/tasks")     --create a new  task
app.get("/api/v1/tasks")     --get a single task
app.patch("/api/v1/tasks")     --update task
app.delete("/api/v1/tasks")     --delete task
*/
const start = async () => {  
    try {
        await connectDB(process.env.MONGO_URI);
    app.listen(port,(req,res)=>console.log(`Listening the port ${port}..`));
} catch (error) {
        console.log(error);
    }
}
start();
