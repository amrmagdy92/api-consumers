// Base Module
import express from "express"

// Security Modules
import cors from "cors"
import helmet from "helmet"
import csp from "helmet-csp"
import expressRateLimiter from "express-rate-limit"

// Environment configuration
import dotenv from "dotenv"

// Request handlers
import bodyParser from "body-parser"
import compress from "compression"

// Routers
import apiListRouter from "./routers/apilist.router"
import newsRouter from "./routers/news.router"
import apiGuruRouter from "./routers/apiguru.router"

// app configuration
dotenv.config()
const configuredBodyParserJSON = bodyParser.json()
const configuredBodyParserURLEncoding = bodyParser.urlencoded({ extended: true })   
const configuredCompress = compress()

// Security Configurations
const configuredHelmet = helmet({ crossOriginResourcePolicy: false })
const configuredCSP = csp({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self' 'unsafe-inline' https://cdn.jsdelivr.net"],
        styleSrc: ["'self' 'unsafe-inline' https://cdn.jsdelivr.net"],
        imgSrc: ["'self' https://encrypted-tbn0.gstatic.com/ https://encrypted-tbn1.gstatic.com/ https://encrypted-tbn2.gstatic.com/ https://encrypted-tbn3.gstatic.com/"]
    }
})
const configuredCors = cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
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
app.use(configuredCSP)
app.use(configuredCors)
app.use(configuredRateLimiter)
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("index.html")
})

// Routes
app.use('/api/v1/news', newsRouter)
app.use('/api/v1/apilist', apiListRouter)
app.use('/api/v1/apiguru', apiGuruRouter)

// Export
export default app