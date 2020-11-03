import express from 'express';
const router = express.Router();
import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

// /login hooked to /api/users
router.post('/login', authUser);

// protect middleware is inserted as first argument of get method
router.route('/profile').get(protect, getUserProfile);

export default router;
