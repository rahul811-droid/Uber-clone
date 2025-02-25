import express from 'express';
import {register,login,getUserProfile,logout} from '../controllers/user.controller.js';
import  {authUser}  from '../middlewares/auth.middleware.js';



const Userouter = express.Router();


Userouter.post('/register',register);
Userouter.post('/login',login);
Userouter.get('/getUserProfile',authUser,getUserProfile);
Userouter.post('/logout',authUser,logout);


export default Userouter;