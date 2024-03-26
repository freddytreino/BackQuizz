const express = require('express')
const perfilRoute = require('./routes/perfilRoute')
const loginRoute = require('./routes/loginRoute')
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

module.exports=app