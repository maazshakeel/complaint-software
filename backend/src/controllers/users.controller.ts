import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// prisma client
const prisma = new PrismaClient()

const createUser = async (req: Request, res: Response) => {

    const { firstName, lastName, cnic, block, homeNo, email, phoneNo, password, verified } = req.body

    // validation
    if (password.length < 5) {
        return res.send({ status: 'error', message: "Password is too small!"})
    }

    // creating client
    async function main() {
        // check if user already exists
        // Validate if user exists in our database
        const oldUser = await prisma.client.findUnique({ 
            where: {
                email: req.body.email
            }
        })
        
        if (oldUser) {
            res.send({ status: 'error', message: "User already exists. Please login."})
        }

        // hasing the password
        const hashedPass = await bcrypt.hash(password, 10)

        const user = await prisma.client.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                cnic: cnic,
                email: email,
                phoneNo: req.body.phoneNo,
                block: block,
                homeNo: homeNo,
                password: hashedPass,
                token: 'token',
                verified: verified,
            }
        })

        // get the id
        const user_id = await prisma.client.findUnique({
            where: {
                email: req.body.email
            },
            select: {
                id: true
            }
        })

        console.log(user_id)

        // Create token
        const token = jwt.sign(
            { user_id: user_id, email: req.body.email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        console.log(token)
        const updateToken = await prisma.client.update({
            where: {
                email: req.body.email
            },
            data: {
                token: token
            }
        })
        return res.send({ status: 'success', data: "User successfully registered!"})
    }
    main()
    .catch((e) => {
        res.send({ status: 'error', error: e.message})
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
}

const logIn = async (req: Request, res: Response) => {
    return res.send({ status: 'success', message: 'User successfuly validated'})
}

const getClientData = async (req: Request, res: Response) => {
    async function main() {
        const response = await prisma.client.findMany() 
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

export { createUser, logIn, getClientData }