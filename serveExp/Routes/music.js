// 视频路由

const { crp, secretABack } = require('../utils/weapons')
const { CATEGORIES_music } = require('../utils/const')
const fs = require('fs')

const express = require('express')
const router = express.Router()

router.get('/getMusicCates', (req, res) => {
    res.send(CATEGORIES_music)
})
router.post('/getSongsList', (req, res) => {
    fs.readdir(req.body.path, (err, data) => {
        if (err) {
            res.sendStatus(404)
        } else {
            let dataList = []
            data.forEach((item, index) => {
                let obj = {
                    id: index,
                    name: item,
                    path: req.body.path + '\\' + item,
                    dirPath: req.body.path
                }
                dataList.push(obj)
            })
            res.send(dataList)
        }
    })
})

router.post('/getSongData', (req, res) => {
    const header = { 'Content-Type': 'mp3' }
    fs.readFile(req.body.path, 'binary', (err, data) => {
        if(err) {
          throw err
        } else {
          res.write(data, 'binary')
          res.end()
        }
      })
})



module.exports = router
