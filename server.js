const express = require("express")
const PORT = process.env.PORT || 8080
const app = express()
const htmlRoutes = require("./routes/htmlRoutes")

app.use(htmlRoutes)

app.listen(PORT, () => {
  console.log("Server is listening on PORT http://localhost:" + PORT)
})