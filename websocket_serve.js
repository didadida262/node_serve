

const WebSocket = require('ws')
const socket = new WebSocket('ws://127.0.0.1:1337')
socket.onopen = () => {
    socket.send('connection is starting.....')
    setInterval(() => {
        socket.send(1)
    }, 1000)
}
socket.onmessage = (msg) => {
    console.log('msg-->:', msg)
}
socket.onclose = () => {
    socket.send('connection is closed...')
}
socket.onerror = (err) => {
    socket.send('err>>', err)
}