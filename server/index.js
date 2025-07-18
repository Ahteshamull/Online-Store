import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from "helmet"
dotenv.config()
const app = express()
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy:false
}))

app.get("/", (req, res) => {
    res.send("Server Running on this route")
})
app.use((req,res) => {
    res.status(404).send("404 Not Found")
})
app.listen(3000, () => {
    console.log("Server Is Running")
})
