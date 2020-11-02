import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

// /login hooked to /api/users
router.post('/login', authUser);

export default router;
