const fs = require('fs')
const path = require('path')
// // 同步读取
// const dirs = fs.readdirSync('./')

// // 异步读取
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



// --->文件扫描器

// 同步判断文件类型
const judeFile = (filname) => {
    const file = fs.statSync(filname)
    if(file.isFile()) {
        return true
    } else {
        return false
    }
}
// 判断文件乞丐版
const jude = (filename) => {
    return filename.indexOf('.') === -1? false: true
}
const p = path.resolve(__dirname)
// 打印当前目录开始的所有儿子(不包括孙子,重孙....)
const res = []
const f = (path) => {
    const dirs = fs.readdirSync(path)
    const r = []
    for (const item of dirs) {
        const c = {}
        const cPath = path == './'? path + item: path + '/' + item
        if (judeFile(cPath)) {
            c[item] = "$"
        } else {
            c[item] = f(cPath)
        }
        r.push(c)
    }
    return r
}
res.push(...f('./'))
console.log('res:', res[2])