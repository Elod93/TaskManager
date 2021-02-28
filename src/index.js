const express = require('express')
require('./db/mongoose')
const useUserRouter = require('./router/user')
const useTaskRouter = require('./router/task')
const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(useUserRouter)
app.use(useTaskRouter)




app.listen(port, () => {
    console.log('Server is up on port: '+port)
})