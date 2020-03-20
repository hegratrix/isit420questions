const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/questions')(app)

app.listen(process.env.PORT||3000, () => console.log('http://localhost:3000'))