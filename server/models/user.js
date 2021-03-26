import mongoose from 'mongoose'
import bcrypt, { hash } from 'bcrypt'
// const { Schema } = mongoose

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        required: 'email is required',
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        min: 6,
        max: 50
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripe_Session: {}
}, {
    timestamps: true,
})

userSchema.pre('save', function(next) {
    let user = this

    if(user.isModified('passowrd')) {
        return bcrypt.hash(user.password, 12, function(err, hash) {
            if(err) {
                console.log('Error!!!', err)
                return next(err)
            }
            user.password = hash
            return next()
        })
    }else {
        return next()
    }
})

const User = mongoose.model('User', userSchema)

export default User