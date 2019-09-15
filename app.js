// grabs nessecary componets
const express = require('express')
const app = express()
require('dotenv').config()

// tells browesr to send this message when you are on defaukt page
app.get('/', (req, res) => {
    res.send("Hello from node")
})

const port = process.env.PORT || 8000


//listens to see if port is runing
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})