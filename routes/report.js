const express = require("express")
const router = express.Router()
const store = require("../store")

router.post("/", (req, res) => {
    const data = req.body
    store.reports[data.id] = data
    res.json({ ok: true })
})

module.exports = router
