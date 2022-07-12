/*
 * @Author: Hhvcg
 * @Date: 2022-06-28 10:48:57
 * @LastEditors: -_-
 * @Description:测试文件
 */
const path = require('path')
const node_respPath = __dirname.split(path.sep).slice( 0, __dirname.split(path.sep).length - 1).join('\\') + '\\node_resp'
// console.log('当前项目地址--->', path.join(__dirname))
console.log('outDirPath', node_respPath)
// console.log('basename--->', path.basename('C:\\temp\\myfile.html'))