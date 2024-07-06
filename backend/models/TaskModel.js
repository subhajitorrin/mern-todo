import mongoose from "mongoose";
const taskSchema = mongoose.Schema({
    task: String
})
const TaskModel = mongoose.model("tasks", taskSchema)
export default TaskModel