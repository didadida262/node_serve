/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑     永不宕机     永无BUG
 * 
 * @Author: Hhvcg
 * @Date: 2022-06-28 10:48:57
 * @LastEditors: -_-
 * @Description: 
 */




const { getAllChar } = require('./tools')
const fs = require('fs')
const path = require('path')

// const Big = getAllBigChar()
// const small = getAllSmallChar()
// console.log('Big--', Big)
// console.log('small--', small)

// for (let i = 65; i < 91; i++) {
//   big.push(String.fromCharCode(i))
// }

// let small = []
// for (let i = 0; i < 1230; i++) {
//   small.push(String.fromCharCode(i))
// }

// console.log('small--->', small.join(' '))
// 骷髅头
// get asicil of cha
// s.charCodeAt()
let x = "\u2620"
console.log(x)
const res = getAllChar('any', 0, 65535).join(' ')
fs.writeFile('all.txt', res, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('success！！！')
  }
})
let xx = '⳧'

// console.log('__dirname>>',__dirname)
// console.log('path',path.basename)


  const p = 'C:\\Users\\hhvcg\\Desktop\\work\\' 
  // 修改文件名
// fs.rename(p + 'test2.doc', p + 'test！！！！！.doc', (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('success！！')
//   }
// });