const express = require('express')
const router = express.Router()
const pool = require('../db/db')
const { body, validationResult } = require('express-validator')

router.post(
  '/add',
  [
    body('title', 'Title must be atleast 3 characters.').isLength({
      min: 3,
    }),
    body('description', 'Desccription must be atleast 5 characters.').isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag, date } = req.body

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const card = await pool.query(
        'SELECT * FROM cards WHERE description = $1',
        [description]
      )

      if (card.rows.length !== 0)
        return res.status(400).json('Card description already exist!')

      const newCard = await pool.query(
        'INSERT INTO cards (title, description, tag, date) values ($1, $2, $3, current_timestamp)',
        [title, description, tag]
      )

      const data = await pool.query(
        'SELECT * FROM cards WHERE description = $1',
        [description]
      )

      res.send(data.rows[0])
    } catch (err) {
      console.error(err.message)
      res.status(500).send(err.message)
    }
  }
)

router.get('/read', async (req, res) => {
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
