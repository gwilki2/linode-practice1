require('dotenv').config()

const express = require('express')
const app = express()

app.get('/endpoint-1', (req, res, next) => {
    res.status(200).json({
        success: true, 
        data: {
            message: 'Hellow from endpoint 1'
        }
    })
})
app.get('/endpoint-2', (req, res, next) => {
    res.status(200).json({
        success: true, 
        data: {
            message: 'Hellow from endpoint 2'
        }
    })
})


const port = process.env.PORT || 5001

app.listen(port, () => console.log(`Server listening on port ${port}`))


