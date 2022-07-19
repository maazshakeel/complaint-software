// imports..
import env from "dotenv"
import express, { Request, Response } from 'express'
import router from "./routes"
import bodyParser from 'body-parser'

// app
const app = express()

// body-parser
app.use(express.json({ extended: false }));
app.use(express.json());

// routes
app.use(router)

// running server
app.listen(3000, () => console.log("Server is running!"))
