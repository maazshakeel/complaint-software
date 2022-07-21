import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()
import bcrypt from 'bcryptjs'
import { TCreateComplaint } from "../types/complaint.type"

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

    if (!ticketNo) {
        return res.send({ status: 'error', message: 'Please provide ticket number!'})
    }
    if (ticketNo > 6) {
        return res.send({ status: 'error', message: 'Please provide valid ticket number!'})
    }

    async function main() {

        // deleting complaint
        const complaint = await prisma.complaints.delete({
            where: {
                ticketNo,
            },
        })
        return res.send({ status: 'success', message: 'complaint deleted succesfuly'})
    }
    // check errors
    main()
    .catch((e) => {
        res.send({ status: 'error', error: e.message})
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
}
// get complaints
const getComplaints = (req: Request, res: Response) => {
    // get all complaints
    async function main() {
        const complaints = await prisma.complaints.findMany() 
        console.log(complaints)
    }
    // check errors
    main()
    .catch((e) => {
        res.send({ status: 'error', error: e.message})
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
    return res.send("Returned all complaint!")
}
const welcome = (req: Request, res: Response) => {
  return res.json({ok: "Welcome 🙌"});
};

export { welcome, createComplaint, finishComplaint, getComplaints }