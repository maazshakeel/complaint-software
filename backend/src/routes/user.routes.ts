import express, { application, Request, response, Response} from 'express'
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const user = express.Router()

// prisma client
const prisma = new PrismaClient()

user.post(
    '/api/register',
    async (req: Request, res: Response) => {
        const { firstName, lastName, cnic, email, phoneNo, verified, block, homeNo, password } = req.body
        // console.log(`${firstName} - ${lastName} - ${cnic} + ${typeof(cnic)} - ${phoneNo} + ${typeof(phoneNo)} - ${verified} - ${block} + ${typeof(block)} - ${homeNo} + ${typeof(homeNo)} - ${password}`)

        // validation
        if (!firstName || !lastName || !cnic || !email || !phoneNo || verified === null || !block || !homeNo || !password) {
            return res.json({ status: 'error', message: "Fields missing!"})
        }
        if (password.length < 5) {
            return res.json({ status: 'error', message: "Password is too small!"})
        }
        if (cnic.length < 12) {
            return res.json({ status: 'error', message: "CNIC is not valid!"})
        }
        if (phoneNo.length < 10) {
          return res.json({ status: 'error', message: "Phone Number is not valid!"})
        }

        // hasing the password
        const hashedPass = bcrypt.hash(password, 10)
        console.log(hashedPass)

        // creating client
        async function main() {
            const response = await prisma.client.create({
                data: {
                    firstName,
                    lastName,
                    // @ts-ignore
                    cnic: cnic,
                    email: email,
                    phoneNo: phoneNo,
                    verified: verified,
                    block,
                    homeNo,
                    password,
                }
            })
          return res.json({ status: 'success', data: "User successfully registered!"})
        }
        main()
        .catch((e) => {
            res.json({ status: 'error', error: e.message})
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    }
)

user.post(
    '/api/login',
    async (req: Request, res: Response) => {
        const { username, password } = req.body
        async function main() {
            const response = prisma.client.findUnique({
              where: {
                // @ts-ignore
                email: username,
              }
            })
            return res.json(response)
        }        
        main()
        .catch((e) => {
            res.json({ status: 'error', error: e.message})
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
        return res.json({ status: 'success', message: 'User successfuly validated'})
    }
)

user.get(
    '/api/client_data',
    async (req: Request, res: Response) => {
        async function main() {
            const response = await prisma.client.findMany() 
            return res.json(response)
        }
        main()
        .catch((e) => {
            res.json({ status: 'error', error: e})
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    }
)

export default user;
