const fs = require('fs')
// 同步读取
const dirs = fs.readdirSync('./')
// console.log('dirs:', dirs)

// 异步读取
fs.readdir('./s', (err, data) => {
    if (err) {
        console.log('path error:', err)
    } else {
        console.log('dir:', data)
    }
})