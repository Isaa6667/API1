const express = require("express")
const cors = require("cors")
const app = express()

const reportRoutes = require("./routes/report")
const actionRoutes = require("./routes/actions")
const logRoutes = require("./routes/log")
const ackRoutes = require("./routes/ack")

app.use(cors())
app.use(express.json())

app.use("/report", reportRoutes)
app.use("/actions", actionRoutes)
app.use("/log", logRoutes)
app.use("/ack", ackRoutes)

app.get("/", (req, res) => res.json({ status: "OK" }))

const port = process.env.PORT || 3000
app.listen(port)
