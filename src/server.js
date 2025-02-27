const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

const credentials = {
  username: 'testuser',
  password: 'testpassword',
}

app.post('/auth', async (req, res) => {
  // sleep for 0.2 - 1 seconds randomly
  const sleepTime = Math.floor(Math.random() * 800) + 200
  await new Promise((resolve) => setTimeout(resolve, sleepTime))

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
