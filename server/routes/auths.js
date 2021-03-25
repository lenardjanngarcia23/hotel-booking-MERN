import express from 'express'

// controllers
import { showMsg, userRegister } from '../controllers/auth-controllers'

const router = express.Router()

router.get('/:message', showMsg)
router.post('/register', userRegister)

export default router