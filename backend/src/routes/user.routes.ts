import express, { application, Request, response, Response} from 'express'
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import bodyParser from 'body-parser'

const router = express.Router()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const app = express()

// prisma client
const prisma = new PrismaClient()

router.post(
    '/api/register',
    async (req: Request, res: Response) => {
        const { firstName, lastName, cnic, block, houseNo, email, phoneNo, password } = req.body

        // validation
        if (!firstName || !lastName || !cnic || !block || !houseNo || !email || !password) {
            return res.send({ status: 'error', message: "Field missing!"})
        }
        if (password.length < 5) {
            return res.send({ status: 'error', message: "Password is too small!"})
        }

        // hasing the password
        const hashedPass = bcrypt.hash(password, 10)

        // creating client
        async function main() {
            const response = await prisma.client.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNo: phoneNo,
                    blockNo: block,
                    homeNo: houseNo,
                    password: hashedPass,
                    verified: false,
                }
            })
        }
        main()
        .catch((e) => {
            res.send({ status: 'error', error: e})
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
        return res.send({ status: 'success', data: "User successfully registered!"})

    }
)

router.post(
    'api/login',
    async (req: Request, res: Response) => {
        return res.send({ status: 'success', message: 'User successfuly validated'})
    }
)

router.get(
    '/api/client_data',
    async (req: Request, res: Response) => {
        async function main() {
            const response = await prisma.client.findFirst() 
            return res.send(response)
        }
        main()
        .catch((e) => {
            res.send({ status: 'error', error: e})
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    }
)

export default router;