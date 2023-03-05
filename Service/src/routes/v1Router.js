
const router = require("express").Router()
const Controller = require("../controller/Controller")




router.post("/setdata", Controller.setPromise)
router.post("/getdata", Controller.getPromise)











module.exports = router