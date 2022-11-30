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
    }
}

module.exports = {
    TOYS
}
