import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { TCreateComplaint } from "../types/complaint.type"
import jwt from 'jsonwebtoken'

const TOKEN_KEY: string = "^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO"

// prisma client
const prisma = new PrismaClient()

// create complaint
const createComplaint = (req: Request, res: Response) => {
  const { ticketNo, complaintStatus, complaintCategory, complaintType, complaintDetails }: TCreateComplaint = req.body

  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY);
  console.log(user_id)

  async function main() {
    await prisma.complaints.create({
      data: {
        ticketNo,
        ComplaintStatus: {
          create: complaintStatus
        },
        ComplaintCategory: {
          create: complaintCategory
        },
        ComplaintDetails: {
          create: complaintDetails
        },
        ComplaintType: {
          create: complaintType
        },
        clientId: 'a801ae84-460f-41eb-bde2-19baa63cfd4b'
      },
    })
    return res.send("Created complaint!")
  }
  // check errors
  main()
    .catch((e) => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
// finish complaint
const finishComplaint = (req: Request, res: Response) => {
  const { ticketNo } = req.body

  if (!ticketNo) {
    return res.send({ status: 'error', message: 'Please provide ticket number!' })
  }
  if (ticketNo < 6) {
    return res.send({ status: 'error', message: 'Please provide valid ticket number!' })
  }

  async function main() {

    // deleting complaint
    await prisma.complaints.delete({
      where: {
        ticketNo,
      },
      include: {
        ComplaintCategory: true,
        ComplaintDetails: true,
        ComplaintStatus: true,
        ComplaintType: true
      }
    })
    return res.send({ status: 'success', message: 'complaint deleted succesfuly' })
  }
  // check errors
  main()
    .catch((e) => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
// get complaints
const getComplaints = (req: Request, res: Response) => {

  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY);
  console.log(user_id.id)

  // get all complaints
  async function main() {
    const complaints = await prisma.complaints.findMany({
      where: {
        clientId: user_id.id
      },
      select: {
        ticketNo: true,
        ComplaintCategory: true,
        ComplaintStatus: true,
        ComplaintDetails: true,
        ComplaintType: true
      }
    })
    if (!complaints) {
      console.log("No compalint")
    }
    return res.send(complaints)
  }
  // check errors
  main()
    .catch((e) => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
const welcome = (req: Request, res: Response) => {
  //return res.json({ok: "Welcome 🙌"});
};

export { welcome, createComplaint, finishComplaint, getComplaints }
