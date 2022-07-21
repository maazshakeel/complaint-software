import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()
import bcrypt from 'bcryptjs'

// import types
import { TCreateClient } from "../types/user.type"

const TOKEN_KEY: string ="^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO"

// prisma client
const prisma = new PrismaClient()

const createUser = async (req: Request, res: Response) => {

    const { firstName, lastName, cnic, block, homeNo, email, phoneNo, password, verified }: TCreateClient = req.body

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

        // hash the password
        const hashedPass = await bcrypt.hash(password, 10)

        // create data
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

        // logging to id to console
        console.log(user_id)

        // Create token
        const token = jwt.sign(
            { user_id: user_id, email: req.body.email },
            TOKEN_KEY,
        );

        // update token
        const updateToken = await prisma.client.update({
            where: {
                email: req.body.email
            },
            data: {
                token: token
            }
        })
        // send request to client
        return res.send({ status: 'success', data: "User successfully registered!", token: token})
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

const logIn = async (req: Request, res: Response) => {
    // get email and password
    const { email, password } = req.body
    console.log(`${email} is trying to login ..`);

    // helper variable
    let isValidated: boolean = false

    // check if that user actually exists
    async function main() {
        // find user with that email
        const user = await prisma.client.findFirst({
            where: {
                email,
            },
            select: {
                email: true,
                password: true
            }
        })
        if (!user.email) {
            return res.send({ status: 'error', message: "User don't exist. Go to registration"})
        }
        if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		return res.send({ status: 'ok'})
	}

	res.send({ status: 'error', message: 'Invalid username/password' })
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

const welcome = (req: Request, res: Response) => {
  res.status(200).send("Welcome 🙌 ");
};

export { createUser, welcome, logIn, getClientData }