// imports..
import express from 'express'
import router from "./routes"

// app
const app = express()

// middlewares
app.use(express.json());

// routes
app.use(router)

// running server
app.listen(8000, '192.168.99.234', () => console.log("Server is running!"))
