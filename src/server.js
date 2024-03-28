const express = require('express')
const perfilRoute = require('./routes/perfilRoute')
const loginRoute = require('./routes/loginRoute')
const questRoute = require('./routes/QuestaoRoute')
const cors = require('cors')

const app = express()
require('./db/index')




app.use(express.json())
app.use(
    cors({
      origin: "*"
    })
  )

app.use('/perfil',perfilRoute)
app.use('/login', loginRoute)
app.use('/quest',questRoute)

module.exports=app