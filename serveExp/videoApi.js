const fs = require('fs')
const { crp, secretABack } = require('../weapons')

const { CATEGORIES } = require('../utils/const.ts')
const VIDEO = {
    getCates: (req, res) => {
        //  req.headers.authorization.slice(7)
        // rawHeaders

        const token = req.headers['x-token']
        const userInfo = secretABack(token)
        if (userInfo.username === 'admin') {
            console.log('CATEGORIES', CATEGORIES)
            res.send(CATEGORIES.slice(0, CATEGORIES.length - 1))
        } else {
            res.send(CATEGORIES.slice(0, CATEGORIES.length - 2))
        }

    },
    // 返回目标类别的videos列表数据
    getVideosList: (req, res) => {
        fs.readdir(req.body.currentCate.path, (err, data) => {
            if (err) {
                res.sendStatus(404)
            } else {
                let videosList = []
                data.forEach((item, index) => {
                    let obj = {
                        id: index,
                        name: item,
                        path: req.body.currentCate.path + '\\' + item
                    }
                    videosList.push(obj)
                })
                res.send(videosList)
            }
        })
    },
    getVideo: (req, res) => {
        console.log('req.body>>', req.body)
        const header = { 'Content-Type': 'video/mp4' }
        fs.createReadStream(req.body.path)
            .pipe(res)
    },
    changeFileName: (req, res) => {
        const oldPath = req.body.path + req.body.name
        const newPath = req.body.path + req.body.inputName
        console.log('oldPath',oldPath)
        console.log('newPath',newPath)
        fs.rename(oldPath, newPath, (err) => {
            if (!err) {
                res.send({
                    message: 'success'
                })
            } else {
                res.sendStatus('500')
            }
        })
    }
}

module.exports = {
    VIDEO
}
