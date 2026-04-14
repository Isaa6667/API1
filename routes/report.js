const express = require("express")
const router = express.Router()
const store = require("../store")

router.get("/", (req, res) => {
    const keys = Object.keys(store.reports)
    if (keys.length === 0) return res.json({})
    const id = keys[0]
    const report = store.reports[id]
    delete store.reports[id]
    res.json(report)
})

module.exports = router
