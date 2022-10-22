const fs = require('fs')
const { CATEGORIES } = require('../utils/const.ts')
const VIDEO = {
    getCates: (req, res) => {
        res.send(Object.keys(CATEGORIES))
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
        console.log('---->')
        console.log('---->')
        console.log('---->')
        console.log('>>>>>>',CATEGORIES[req.body.currentCate].path  + req.body.name)        
        const header = { 'Content-Type': 'video/mp4' }
        fs.createReadStream(CATEGORIES[req.body.currentCate].path + req.body.name)
            .pipe(res)
    }
}

module.exports = {
    VIDEO
}
