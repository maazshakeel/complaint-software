// imports
import express from "express";
import user from "./user.routes";

// router
const router = express.Router();

// testing if it is working 
router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(user);

// exporting
export default router;
