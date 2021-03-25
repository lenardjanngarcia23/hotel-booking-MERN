import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';


dotenv.config()

// routers
import routah from './routes/auths'
const app = express()


// database connection
const connectDB = async () => {
    try {
        const connz = await mongoose.connect(process.env.ATLAS_DATABASE, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true })

            console.log(`Congratulations your MongoDB has connected!!!`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

connectDB()

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// route middleware
// fs.readdirSync('./routes').map((r) => 
//     app.use('/api', require(`./routes/${r}`))
// )
app.use('/api', routah)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})