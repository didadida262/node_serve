const fs = require('fs')
// 同步读取
const dirs = fs.readdirSync('./')
// console.log('dirs:', dirs)

// 异步读取
// fs.readdir('./', (err, data) => {
//     if (err) {
//         console.log('path error:', err)
//     } else {
//         console.log('dir:', data)
//     }
// })
// 创建文件夹
// fs.mkdir('./ttt', (err) => {
//     if (err) {
//         console.log('创建失败', err)
//     } else {
//         console.log('创建成功！')
//     }
// })

// 覆盖写入 
// fs.writeFile('test.txt', '今天十个好日子', (err) => {
//     if (err) {
//         console.log('error:', err)
//     } else {
//         console.log('成功！')
//     }
// })

// 追加写入
// fs.appendFile('test.txt', '今天十个搜索好日子', (err) => {
//     if (err) {
//         console.log('error:', err)
//     } else {
//         console.log('成功！')
//     }
// })

// 读取文件
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('error:', err)
//     } else {
//         console.log('成功读取:', data)
//     }
// })

// 判断文件类型
fs.stat('./fs.js', (err, stats) => {
    if (err) {
        console.log('err!', err)
    } else {
        if (stats.isFile()) {
            console.log('Is File')
        } else {
            console.log('Is Dir')
        }
    }
})