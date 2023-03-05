const express = require("express")
const cors = require("cors")



//db
require('./src/DB/init.redis')




//Router
const Router = require("./src/routes/v1Router")



const app = express()

require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/api/test", Router)



const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})




