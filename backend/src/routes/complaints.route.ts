import express from 'express'
import { 
    welcome,
    createComplaint, 
    finishComplaint, 
    getComplaints
} from '../controllers/complaints.controller'
import { verifyToken } from '../middlewares/auth.middleware'

const router = express.Router()

router.get(
    "/api/checking", 
    welcome
)

router.post(
    "/api/complaint",
    createComplaint
)

router.delete(
    "/api/complaint",
    finishComplaint
)

router.get(
    "/api/complaints",
    getComplaints
)

router.get
export default router;
