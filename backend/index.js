import express from "express"
import connectDB from "./db/db.js"
import TaskRoute from "./Routes/TaskRoute.js"

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use("/task",TaskRoute)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is listening at http://localhost:${PORT}`);
})