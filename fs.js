const fs = require('fs')
// 同步读取
const dirs = fs.readdirSync('./')
// console.log('dirs:', dirs)

// 异步读取
fs.readdir('./', (err, data) => {
    if (err) {
        console.log('path error:', err)
    } else {
        console.log('dir:', data)
    }
})
// 创建文件夹
fs.mkdir('./ttt', (err) => {
    if (err) {
        console.log('创建失败', err)
    } else {
        console.log('创建成功！')
    }
})