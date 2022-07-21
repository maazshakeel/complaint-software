// imports..
import express from 'express'
import router from "./routes"
import bodyParser from 'body-parser'

// app
const app = express()

// middlewares
app.use(express.json());

// routes
app.use(router)

// running server
app.listen(3000, () => console.log("Server is running!"))
