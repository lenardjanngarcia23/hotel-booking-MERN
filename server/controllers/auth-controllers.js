import User from '../models/user'
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res) => {
    console.log(req.body)

    const { name, email, password } = req.body

    // validation
    if(!name) return res.status(400).send('Name is required')
    if(!password || password.length < 6) 
        return res.status(400).send('Password is requred and should be min 6 characters')

    let userExist = await User.findOne({email}).exec() // if error use let
    if(userExist) return res.status(400).send('Email is taken')

    // register
    const user = new User(req.body)

    try {
        await user.save()
        console.log('USER CREATED SUCCESSFULLY', user)
        return res.json({ ok: true })
    } catch (error) {
        console.log('CREATE USER FAILED', error)
        return res.status(400).send('Error. Try again.')
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        // check if the user is existing
        let user = await User.findOne({email}).exec() // if error use let
        if(!user) return res.status(400).send('EMAIL NOT FOUND!')
        // compare password
        user.comparePassword(password, (err, match) => {
            // console.log('Compare password in login error', err)
            if(!match || err) return res.status(400).send('Wrong password')
            // Generate jwt webtoken
            let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            })
            res.json({ token, user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            } })
        })
    } catch (err) {
        console.log('Error!!!', err)
        res.status(400).send('Sign in failed :(')
    }
}