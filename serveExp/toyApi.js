/*
 * 
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃ 　
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃　　　　　　　　　　　
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug　　
 * 　　　┃　　　┃　　+　　　　　　　　　
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 * 
 * 
 * @Author: Hhvcg
 * @Date: 2022-11-30 16:53:33
 * @LastEditors: -_-
 * @Description: 
 */

const fs = require('fs')
const { crp, secretABack } = require('../weapons')

const TOYS = {
    subMitRecords: (req, res) => {
        console.log('newPath',req.body.content)
// 追加写入
        fs.appendFile('records.txt', '\n' + req.body.content, (err) => {
            if (err) {
                res.send({
                    message: 'error'
                })
            } else {
                res.send({
                    message: 'success'
                })
            }
        })
    },
    getRecordsList: (req, res) => {
        fs.readFile('records.txt', 'utf-8', (err, data) => {
            if (err) {
                res.send(err)
            } else {
                const newD = data.split(' ')
                console.log('res>>', newD)
                res.send(newD)
            }
        })
    }
}

module.exports = {
    TOYS
}
