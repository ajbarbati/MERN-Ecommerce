// grabs nessecary componets
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()
//import routes
const userRoutes = require('./routes/user')


//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB CONNECTED'))

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser)

//routes middleware
app.use('/', userRoutes)

const port = process.env.PORT || 8000


//listens to see if port is runing
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})