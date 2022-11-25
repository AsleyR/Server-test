// Import Packages
import express , { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from "path"
const api = require('./api/api');
dotenv.config();

// Middleware
const app: Express = express()
app.use(express.json())

// Request Handlings & Routes
app.use('/', express.static('public'))
// Routes
app.use('/api', api)

// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`⚡️[Server]: Server is running at: http://localhost:${PORT}`)
});