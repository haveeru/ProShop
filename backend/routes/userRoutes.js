import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
// /login hooked to /api/users
router.post('/login', authUser);
// protect middleware is inserted as first argument of get method
router.route('/profile').get(protect, getUserProfile);

export default router;
