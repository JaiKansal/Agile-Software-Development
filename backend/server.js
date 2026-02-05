require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./routes/userRoutes')
const taskRouter = require('./routes/taskRoutes')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware');

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false })); // <--- Add this too (helps parse data)
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/users', userRouter)
app.use('/api/tasks', taskRouter)
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the Task Manager API'});
})

connectDB()

// 404 handler
app.use((req, res) => {
    res.status(404).json({message: 'Route not found'})
})

app.use(errorHandler);

//listen on port 3000
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
})

