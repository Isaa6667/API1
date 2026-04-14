const express = require("express")
const router = express.Router()
const store = require("../store")

router.post("/", (req, res) => {
    const id = req.body.reportId
    if (store.reports[id]) store.reports[id].status = "HANDLED"
    res.json({ ok: true })
})

module.exports = router
