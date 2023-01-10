/*
 *  ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 *  │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 *  └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 *  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 *  │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
 *  ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 *  │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 *  ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 *  │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 *  ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 *  │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 *  ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 *  │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 *  └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 * 
 * @Author: Hhvcg
 * @Date: 2022-10-23 14:27:49
 * @LastEditors: -_-
 * @Description: 
 */

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
            res.send(CATEGORIES.slice(0, CATEGORIES.length - 4))
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
                        path: req.body.currentCate.path + '\\' + item,
                        dirPath: req.body.currentCate.path
                    }
                    videosList.push(obj)
                })
                res.send(videosList)
            }
        })
    },
    getVideo: (req, res) => {
        const header = { 'Content-Type': 'video/mp4' }
        fs.createReadStream(req.body.path)
            .pipe(res)
    },
    getVideoCyberFont: (req, res) => {
        console.log('req.body>>', req.bodygetVideogetVideo)
        const header = { 'Content-Type': 'video/mp4' }
        fs.createReadStream('./清帝逊位.mp4')
            .pipe(res)
    },
    changeFileName: (req, res) => {
        const oldPath = req.body.path
        const newPath = req.body.dirPath + '\\' + req.body.inputName + req.body.path.slice(-4)
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
