const express = require('express')

const app = express()
const PORT = 3000

const credentials = {
  username: 'testuser',
  password: 'testpassword',
}

app.post('/auth', (req, res) => {
  const { username, password } = req.body
  if (username === credentials.username && password === credentials.password) {
    res.status(200).json({ message: 'Authenticated' })
  } else {
    res.status(401).json({ message: 'Bad username or password' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
