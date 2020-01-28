const express = require("express")
const usersModel = require("./users/usersModel")

const server = express()
server.use(express.json())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' })
})

server.get('/users', async (req, res) => {
  const users = await usersModel.find()
  res.status(200).json(users)
})

server.post('/users', async (req, res) => {
  res.status(201).json(await usersModel.add(req.body))
})

server.delete('/users/:id', async (req, res) => {
  const id = req.params.id
  if(!id) {
    return res.status(401).json({ message: 'Must include the ID of the user you want to delete.' })
  }
  res.status(200).json(await usersModel.remove(id))
})

if(!module.parent) {
  server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}.`))
}

module.exports = server