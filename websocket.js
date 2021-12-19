const socket = new WebSocket('ws://127.0.0.1:1337')
socket.onopen = () => {
    setInterval(() => {
        socket.send(1)
    }, 1000)
}
socket.onmessage = (res) => {
    console.log('res-->:', res)
}