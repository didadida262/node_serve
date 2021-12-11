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

// 非对成加密

module.exports.crp = crp
module.exports.secretA = secretA
