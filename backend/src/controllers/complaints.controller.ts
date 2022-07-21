import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()
import bcrypt from 'bcryptjs'

const TOKEN_KEY: string ="^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO"

// prisma client
const prisma = new PrismaClient()

// create complaint
const createComplaint = (req: Request, res: Response) => {
    const { ticketNo, complaintStatus, complaintCategory, complaintType, complaintDetails, photoUri, isUrgent} = req.body
    return res.send("Created complaint!")
}
// finish complaint
const finishComplaint = (req: Request, res: Response) => {
    const { ticketNo } = req.body
    // select complaint with that ticket no
    // delete it
    return res.send("Finished complaint!")
}
// get complaints
const getComplaints = (req: Request, res: Response) => {
    // get all complaints
    return res.send("Returned all complaint!")
}
const welcome = (req: Request, res: Response) => {
  return res.json({ok: "Welcome 🙌"});
};

export { welcome, createComplaint, finishComplaint, getComplaints }