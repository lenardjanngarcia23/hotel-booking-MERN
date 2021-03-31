import mongoose from 'mongoose'
import bcrypt, { hash } from 'bcrypt'


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
        required: true,
        min: 6,
        max: 64,
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripe_Session: {}
}, {
    timestamps: true,
})

userSchema.pre("save", function(next) {
    let user = this

    if(user.isModified("password")) {
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

userSchema.methods.comparePassword = function(password, next) {
    bcrypt.compare(password, this.password, function(err, match) {
        if(err) {
            console.log('PASSWORD DID NOT MATCH', err)
            return next(err, false) // didn't match
        }
            // if no error, we get null
            console.log('PASSWORD MATCH!', match)
            return next(null, match) // it match
        
    })
}

const User = mongoose.model('User', userSchema)

export default User