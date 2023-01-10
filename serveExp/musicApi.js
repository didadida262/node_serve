

const fs = require('fs')

const { CATEGORIES_music } = require('../utils/const.ts')
const MUSIC = {
    getMusicCates: (req, res) => {
        console.log('CATEGORIES_music', CATEGORIES_music)
        res.send(CATEGORIES_music)
    },
    getSongsList: (req, res) => {
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
    },
    getSongData: (req, res) => {
        console.log('getSongData>>>')
        console.log('req.body>>>',req.body)
        const header = { 'Content-Type': 'mp3' }
        // fs.createReadStream(req.body.path)
        //     .pipe(res)
        // res.send(dataList)
        fs.readFile(req.body.path, 'binary', (err, data) => {
            if(err) {
              throw err
            } else {
              res.write(data, 'binary')
              res.end()
            }
          })
        
    } 
}

module.exports = {
    MUSIC
}
