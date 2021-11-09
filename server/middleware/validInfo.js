module.exports = (req, res, next) => {
  const { Name, Email, Password } = req.body

  function validName(userName) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userName)
  }

  if (req.path === '/register') {
    if (![Name, Email, Password].every(Boolean)) {
      return res.status(401).json('Missing Credentials')
    } else if (!validName(Email)) {
      return res.status(401).json('Invalid Email')
    }
  } else if (req.path === '/login') {
    if (![Email, Password].every(Boolean)) {
      return res.status(401).json('Missing Credentials')
    } else if (!validName(Email)) {
      return res.status(401).json('Invalid Email')
    }
  }

  next()
}
