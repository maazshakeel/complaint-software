import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { TCreateComplaint } from "../types/complaint.type"

const TOKEN_KEY: string = "^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO"

// prisma client
const prisma = new PrismaClient()

// create complaint
const createComplaint = (req: Request, res: Response) => {
  const { ticketNo, complaintStatus, complaintCategory, complaintType, complaintDetails }: TCreateComplaint = req.body

  async function main() {
    await prisma.complaints.create({
      data: {
        ticketNo,
        complaintStatus: {
          create: complaintStatus
        },
        complaintCategory: {
          create: complaintCategory
        },
        complaintDetails: {
          create: complaintDetails
        },
        complaintType: {
          create: complaintType
        },
      }
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
        complaintStatus: true,
        complaintType: true,
        complaintCategory: true,
        complaintDetails: true
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
  // get all complaints
  async function main() {
    const complaints = await prisma.complaints.findMany({
      include: {
        complaintType: true,
        complaintStatus: true,
        complaintDetails: true,
        complaintCategory: true
      }
    })
    console.log(complaints)
    return res.send({ complaints })
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
