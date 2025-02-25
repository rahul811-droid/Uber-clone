import express from 'express';
import { createCaptain,getCaptainProfile,login,logout } from '../controllers/captain.controller.js';
import  {authCaptain}  from '../middlewares/auth.middleware.js';




const router = express.Router();

router.post('/register',createCaptain );
router.post('/login',login);
router.get('/captainProfile',authCaptain,getCaptainProfile);
router.post('/logout',authCaptain,logout);

export default router;