import express from 'express';
import { loginNgo } from '../controllers/authNgo.js';
const router = express.Router();
router.post("/login",loginNgo);
export default router;