const express = require('express')

const app = express()

app.get('/api/:message', (req, res) => {
    res.status(200).send(req.params.message)
})

app.listen(8000, () => console.log(`Server is running in port 8000`))

// import express from 'express'
// import fs from 'fs'
// import cors from 'cors'
// import mongoose from 'mongoose'

// const morgan = require('morgan')
// require('dotenv').config()

// // routers
// // import routah from './routes/auths'
// const app = express()


// // database connection
// const connectDB = async () => {
//     try {
//         const connz = await mongoose.connect(process.env.ATLAS_DATABASE, { 
//             useNewUrlParser: true, 
//             useFindAndModify: false, 
//             useUnifiedTopology: true, 
//             useCreateIndex: true })

//             console.log(`Congratulations your MongoDB has connected!!!`)
//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
// }

// connectDB()

// // middleware
// app.use(cors())
// app.use(morgan('dev'))

// // route middleware
// fs.readdirSync('./routes').map((r) => 
//     app.use('/api', require(`./routes/${r}`))
// )
// // app.use('/api', routah)

// const port = process.env.PORT || 8000

// app.listen(port, () => {
//     console.log(`Server is running in ${port}`)
// })