import express, { application, Request, response, Response } from 'express'
import { createUser, getClientData, welcome, logIn } from '../controllers/users.controller'
import { verifyToken } from '../middlewares/auth.middleware'

const router = express.Router()

const app = express()

router.post(
  '/api/register',
  createUser,
)

router.post(
  '/api/login',
  logIn
)

router.get(
  '/api/client_data',
  getClientData
)

router.post(
  "/api/welcome",
  verifyToken,
  welcome
)
export default router;
