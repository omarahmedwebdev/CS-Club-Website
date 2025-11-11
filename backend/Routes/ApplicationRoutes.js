const express = require("express")
const router = express.Router()
const { addApp } = require('../Controllers/Application');



router.post("/addApp" , addApp)


module.exports = router