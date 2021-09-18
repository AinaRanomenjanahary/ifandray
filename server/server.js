const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
})

io.on('connection', socket=>{
    console.log('connection made succesfully')
    socket.on('message',payload=>{
        console.log('Message receveid on server: ', payload)
        io.emit('message', payload)
    })
})

server.listen(7000,()=>{
    console.log('I am listening at port: 7000)');
})

