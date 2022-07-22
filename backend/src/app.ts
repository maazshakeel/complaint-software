// imports..
import express from 'express'
import router from "./routes"
import bodyParser from 'body-parser'
import cors from 'cors'

// app
const app = express()

// middlewares
app.use(express.json());

// routes
app.use(router)

// running server
app.listen(8000, '192.168.1.144', () => console.log("Server is running!"))
