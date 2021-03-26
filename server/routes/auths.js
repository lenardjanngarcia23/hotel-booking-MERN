import express from 'express'

// controllers
import { userRegister } from '../controllers/auth-controllers'

const router = express.Router()


router.post('/register', userRegister)

export default router