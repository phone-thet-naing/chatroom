const express = require('express')
const app = express()
const PORT = 4000

// const http = require('http').Server(app)
const cors = require('cors')

const { createServer } = require('http') 
const { Server } = require('socket.io')

const httpServer = createServer()
// const io = require('socket.io')(3000, {
//     cors: {
//         origin: ['http://localhost:8080']
//     }
// })
const io = new Server(httpServer, {
    cors: {
        origin: [
            'http://localhost:5173'
        ]
    }
})

httpServer.listen(3000)

app.use(cors())

let users = []

io.on('connection', (socket) => {
    console.log(`🔥: ${socket.id} user just connected`)

    socket.on('message', (data) => {
        console.log(data)
        io.emit('messageResponse', data)
    })

    // Listens when a new user joins
    socket.on("newUser", (data) => {
        // Add the new user to user list
        users.push(data)

        // Sends the user list to the client
        socket.emit("newUserResponse", users)
    })

    // Listens when a user is typing
    socket.on("typing", (data) => {
        // Sends typing... sign to client
        socket.broadcast.emit("typingResponse", data);
    })

    socket.on('disconnect', () => {
        console.log(`User with id ${socket.id} disconnected`);

        // Update the user list and removes the disconnected user
        users.filter((user) => user.socketId !== socket.id)

        console.log(users)

        // Sends the updated user list back to the client
        socket.emit("newUserResponse", users)
    })
})

app.get('/', (req, res) => {
    res.json({
        message: "This is root" + {...req}
    })
})

app.get('/api', (req, res) => {
    res.json({
        message: "It's working!"
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})