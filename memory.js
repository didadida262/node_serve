/*
 * @Author: Hhvcg
 * @Date: 2022-07-11 15:47:54
 * @LastEditors: -_-
 * @Description: 内存篇
 */


const os = require('os')

const format = (name, bytes) => {
  return name + ': '+ (bytes / 1024 / 1024 ).toFixed(2) + ' MB '
}

const printMemoryInfo = () => {
  const memory = process.memoryUsage()
  let res = 'Process: '
  for (let key in memory) {
    res = res + format(key, memory[key])
  }
  return res
}


const useMemory = () => {
  const size = 1 * 1024 * 1024
  const arr = new Array(size)
  for (let i = 0 ; i < size; i++) {
    arr[i] = 0    
  }
  return arr
}
const userMemory2 = () => {
  const size = 200 * 1024 * 1024
  const buffer = new Buffer(size)
  for (let i = 0; i < size; i++) {
    buffer[i] = 0
  }
  return buffer
}
const total = []
for (let i = 0; i < 20; i++) {
  console.log('index---->', i)
  console.log(printMemoryInfo())
  console.log('====================================')
  total.push(userMemory2())
}
// // 查看系统内存
// console.log(format('系统总内存', os.totalmem()))
// console.log(format('系统闲置内存', os.freemem()))