const express = require('express')
const port = process.env.PG_PORT || 4000
const app = express()
const cors = require('cors')

// middleware

app.use(express.json())
app.use(cors())

// available routes

app.use('/auth', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log('server is up and listening at PORT', port)
})
