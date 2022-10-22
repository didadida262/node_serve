const fs = require('fs')
const { crp, secretABack } = require('.././tools')

const { CATEGORIES } = require('../utils/const.ts')
const VIDEO = {
    getCates: (req, res) => {
        //  req.headers.authorization.slice(7)
        // rawHeaders

        const token = req.headers['x-token']
        const userInfo = secretABack(token)
        if (userInfo.username === 'admin') {
            res.send(Object.keys(CATEGORIES))
        } else {
            res.send(Object.keys(CATEGORIES).slice(0,2))
        }

    },
    // 返回目标类别的videos列表数据
    getVideosList: (req, res) => {

        fs.readdir(CATEGORIES[req.body.currentCate].path, (err, data) => {
            if (err) {
                console.log('path error:', err)
            } else {
                let videosList = []
                data.forEach((item, index) => {
                    let obj = {
                        id: index,
                        name: item,
                    }
                    videosList.push(obj)
                })
                res.send(videosList)
            }
        })
    },
    getVideo: (req, res) => {
        const header = { 'Content-Type': 'video/mp4' }
        fs.createReadStream(CATEGORIES[req.body.currentCate].path + req.body.name)
            .pipe(res)
    }
}

module.exports = {
    VIDEO
}
