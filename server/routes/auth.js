const express = require('express')
const router = express.Router()
const validInfo = require('../middleware/validInfo')
const pool = require('../db/db')

router.post('/register', validInfo, async (req, res) => {
  try {
    const { Name, Email, Password } = req.body
    const user = await pool.query('SELECT * FROM users WHERE Email = $1', [
      Email,
    ])
    if (user.rows.length !== 0)
      return res.status(401).json('User Already Exist!')

    let newUser = await pool.query(
      'INSERT INTO users (Name, Email, Password) values ($1, $2, $3)',
      [Name, Email, Password]
    )
    const data = await pool.query('SELECT * FROM users WHERE Email = $1', [
      Email,
    ])
    res.send(data.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).send(err.message)
  }
})

router.get('/login', validInfo, async (req, res) => {
  try {
    const { Email, Password } = req.body
    const user = await pool.query('SELECT * FROM users WHERE Email = $1', [
      Email,
    ])
    if (user.rows.length === 0) return res.status(401).json('User Not Found!!')

    if (Password !== user.rows[0].password)
      return res.status(401).json('Invalid Credentials')

    let User = await pool.query('SELECT * FROM users WHERE Email = $1', [Email])
    res.send(User.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).send(err.message)
  }
})

module.exports = router
