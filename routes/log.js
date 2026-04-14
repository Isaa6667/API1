const express = require("express")
const router = express.Router()
const store = require("../store")

router.post("/", (req, res) => {
    store.logs.push(req.body)
    res.json({ ok: true })
})

module.exports = router
