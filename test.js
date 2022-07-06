/*
 * @Author: Hhvcg
 * @Date: 2022-06-28 10:48:57
 * @LastEditors: -_-
 * @Description:测试文件
 */
let x = {c: 'x'}
let y = {c: 'y'}
x.a = y
y.a = x
x = null

console.log('x--->', x)
console.log('y--->', y.a)