const express = require('express')
const port = process.env.PG_PORT || 3000
const app = express()

// middleware 

app.use(express.json())

// available routes

app.use('/auth', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
