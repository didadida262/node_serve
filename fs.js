/*
 * @Author: Hhvcg
 * @Date: 2022-02-28 10:07:23
 * @LastEditors: -_-
 * @Description: 文件扫描器
 */
const fs = require('fs')
const path = require('path')
const videoPath = 'F:\\Public_disk\\' + 'the great films' + '\\Time'

console.log(videoPath)

// // 同步读取
// const dirs = fs.readdirSync('./')

// // 异步读取,返回数组
// fs.readdir('./', (err, data) => {
//     if (err) {
//         console.log('path error:', err)
//     } else {
//         console.log('dir:', data)
//     }
// })
// console.log('--->')


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
// fs.stat(fileName, (err, stats) => {
//     if (err) {
//         console.log('err!', err)
//     } else {
//         if (stats.isFile()) {
//             // console.log('Is File')
//             return false
//         } else {
//             console.log('Is Dir')
//             return true
//         }
//     }
// })



const mediaPath = path.join(__dirname)

// console.log('mediaPath---->', mediaPath.substr(0, mediaPath.length - 11) + '\\media')

module.exports.name = 'name'
// console.log('module---->',module)
// console.log('exports---->',exports)
// console.log('required---->',require)

// console.log('file', __filename)
// console.log('__dirname', __dirname)








