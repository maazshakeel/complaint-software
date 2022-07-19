import express, { application, Request, response, Response} from 'express'
import { createUser, getClientData, logIn } from '../controllers/users'

const router = express.Router()

const app = express()

router.post(
    '/api/register',
    createUser,
)

router.post(
    'api/login',
    logIn
)

router.get(
    '/api/client_data',
    getClientData
)

export default router;
