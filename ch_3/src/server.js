import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT =  process.env.PORT || 5050

// Get the path of the current file
const __filename  = fileURLToPath(import.meta.url)
// Get the directory of the current file
const __dirname = dirname(__filename)

// Servers the HTML file from the directory
// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

// Serving up the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Routes
app.use('/auth',authRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log('Press Ctrl+C to stop the server')
})