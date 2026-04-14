const express = require("express")
const router = express.Router()
const store = require("../store")

router.get("/", (req, res) => {
    const pending = [...store.actions]
    store.actions = []
    res.json(pending)
})

module.exports = router
