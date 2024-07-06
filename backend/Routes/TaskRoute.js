import express from "express"
import TaskModel from "../models/TaskModel.js"
const router = express.Router()
router.post("/add", async (req, res) => {
    try {
        const data = req.body
        const dbres = await TaskModel.create(data)
        res.status(300).json({ msg: "Task added successfully", res: dbres })
    } catch (error) {
        res.status(404).json({ msg: "Error while adding task", res: error.message })
    }
})
router.get("/", async (req, res) => {
    try {
        const dbres = await TaskModel.find({})
        res.status(201).json({ msg: "All tasks fetched", res: dbres })
    } catch (error) {
        res.status(404).json({ msg: "Error while fetching task", res: error.message })
    }
})
router.put("/update/:taskid", async (req, res) => {
    try {
        const taskid = req.params.taskid
        const dbres = await TaskModel.findByIdAndUpdate(taskid, req.body, { new: true })
        res.status(201).json({ msg: "Task updated successfully", res: dbres })
    } catch (error) {
        res.status(404).json({ msg: "Error while updating task", res: error.message })
    }
})
router.delete("/delete/:taskid", async (req, res) => {
    try {
        const { taskid } = req.params
        const dbres = await TaskModel.findByIdAndDelete(taskid)
        res.status(201).json({ msg: "Task deleted successfully", res: dbres })
    } catch (error) {
        res.status(404).json({ msg: "Error while deleting task", res: error.message })
    }
})
export default router