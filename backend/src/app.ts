// imports..
import env from "dotenv"
import express, { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
// @ts-ignore
import cors from "cors"

// app
const app = express()

// middlewares
app.use(express.json())
app.use(
    cors({
        origin: "*"
    })
)

// prisma client
const prisma = new PrismaClient()

// routes...

// running server
app.listen(3000, () => console.log("Server is running!"))