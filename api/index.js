import express from "express"
import cors from "cors"
import jogosRoutes from "./routes/jogos.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", jogosRoutes)

app.listen(8800)