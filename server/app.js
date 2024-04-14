// Base Module
import express from "express"

// Security Modules
import cors from "cors"
import helmet from "helmet"
import expressRateLimiter from "express-rate-limit"

// Environment configuration
import dotenv from "dotenv"

// Request handlers
import bodyParser from "body-parser"
import compress from "compression"

// Routers
import newsRouter from "./routers/news.router"

// app configuration
dotenv.config()
const configuredBodyParserJSON = bodyParser.json()
const configuredBodyParserURLEncoding = bodyParser.urlencoded({ extended: true })   
const configuredCompress = compress()

// Security Configurations
const configuredHelmet = helmet({ crossOriginResourcePolicy: false })
const configuredCors = cors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS,
    credentials: process.env.CORS_CREDENTIALS
})
const configuredRateLimiter = expressRateLimiter({
    window: process.env.RATE_WINDOW,
    max: process.env.RATE_MAX,
    message: process.env.RATE_MESSAGE,
    Headers: true,
    keyGenerator: (req, res) => {
        return req.ip
    }
})

// App initialization
const app = express()
app.use(configuredBodyParserJSON)
app.use(configuredBodyParserURLEncoding)
app.use(configuredCompress)
app.use(configuredHelmet)
app.use(configuredCors)
app.use(configuredRateLimiter)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("hello")
})

// Routes
app.use('/api/v1/news', newsRouter)

// Export
export default app