
/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * 
 * @Author: Hhvcg
 * @Date: 2022-02-28 10:07:23
 * @LastEditors: -_-
 * @Description: 军武库
 */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
// 用户信息加密处理
const crp = (userInfo) => {
    const userInfoStr = userInfo.userName + userInfo.password
    const hash = crypto
        .createHash('sha1')
        .update(userInfoStr)
        .digest('hex')
    return hash
}

// 对成加密
const secretA = (userInfo) => {
    const token = jwt.sign(userInfo, 'shhhhh')
    console.log('揭秘:', jwt.verify(token, 'shhhhh'))
    return token
}

const secretABack = (token) => {
    return jwt.verify(token, 'shhhhh')
}

// 非对成加密
let count = 0
const add = (num1, num2) => {
    conut = num1 + num2
}

// 返回media目录下的文件
const getAllSongs = () => {
    const mediaPath = path.join(__dirname, 'media')
    let res = null
    res = fs.readdirSync(mediaPathir).filter((item) => item.includes('.mp3'))
    return res
}


/**
 * @description: 比特转换器  
 * @param {*} name 名称
 * @param {*} bytes 比特值大小
 * @return {*} MB单位值
 */
const format = (name, bytes) => {
    return name + ': '+ (bytes / 1024 / 1024 ).toFixed(2) + ' MB '
}

/**
 * @description: 程序耗时检测器 
 * @param {*} 输出名称
 * @param {*} fn
 * @return {*} 输出程序用时
 */
 const costTime = (name, fn) => {
    console.time(name)
    fn()
    console.timeEnd(name)
  }

 /**
  * @description: 万能字符获取器 
  * @param {*} type small、big、num、any
  * @param {*} start 若类型为any则需要输入开始和结束值，否则输出空
  * @param {*} end
  * @return {*} 返回结果数组
  */
 const getAllChar = (type, start, end) => {
    const targetObj = {
        // 大小写字母：65--90，97-122
        small: [97, 122],
        big: [65, 90],
        // 数字：48--57
        num: [48, 57],
        any: [start, end]
    }
    const range = targetObj[type]
    const res = []
    let point = range[1]
    while(point >= range[0]) {
        res.unshift(String.fromCharCode(point))
        if(point % 70 === 0) {
            res.unshift('\n')
        }
        // charCodeAt
        point--
    }
    return res
}
// 读取目标路径下的所有文件
const getFiles = (path) => {
    return fs.readdirSync(path, (err, data) => {
        return []
    })

    // fs.readdir(path, (err, data) => {
    //     if (err) {
    //         console.log('path error:', err)
    //     } else {
    //         console.log('data>>', data)
    //         return data
    //     }
    // })
}
  module.exports = {
    crp,
    secretA,
    add,
    costTime,
    getAllChar,
    secretABack,
    getFiles
  }
