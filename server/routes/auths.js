import express from 'express'

// controllers
import { userRegister, userLogin } from '../controllers/auth-controllers'

const router = express.Router()


router.post('/register', userRegister)
router.post('/login', userLogin)

export default router