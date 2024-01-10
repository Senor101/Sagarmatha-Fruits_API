const http = require("http")

const app = require('./app')

const connectDB = require("./api/v1/configs/db.config")

const PORT = process.env.PORT || 8000;

const server = http.createServer(app)

async function startServer() {
    await connectDB();
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

startServer()