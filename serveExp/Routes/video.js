// 视频路由

const fs = require('fs')
const url = require('url')
const { crp, secretABack } = require('../utils/weapons')
const { CATEGORIES, hideRights } = require('../utils/const')

const express = require('express')
const router = express.Router()

router.get('/getCates', (req, res) => {
    const token = req.headers['x-token']
    const userInfo = secretABack(token)
    if (userInfo.username === 'admin') {
        res.send(CATEGORIES)
    } else {
        // 部分权限
        const da = []
        CATEGORIES.forEach((item) => {
            if (hideRights.findIndex((t) => t === item.key) === -1) {
                da.push(item)
            }
        })
        res.send(da)
    }
})
router.post('/getVideosList', (req, res) => {
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
})
router.post('/getVideo', (req, res) => {
    // const header = { 'Content-Type': 'video/mp4' }
    const readStream = fs.ReadStream(req.body.path)
    readStream.on('data', (chunk) => {
        console.log('chunk>>>',chunk)
        res.write(chunk)
    })
    // readStream.pipe(res)
    readStream.on('close', () => {
        console.log('finished!!!!')
        res.end()
    })
    // fs.createReadStream(req.body.path)
    //     .pipe(res)
})
router.get('/testVideo', (req, res) => {
    const request = url.parse(req.url, true);
    console.log('request>>>>>', request)
    // const path = 'E:\\RESP\\cate_g\\中日雙字昭和維新之歌轉載.mp4'
    // const path = 'E:\\RESP\\cate_g\\【林瀾對話】囚聲 _ 上海回憶錄 _ #新唐人電視台.mp4'
    const path = 'E:\\RESP\\cate_p\\18.mp4'
    // var time = new Date();
    // res.writeHead(200, {'Content-Type': 'video/mp4'});
    // var rs = fs.createReadStream(path + 'test' + '.mp4');
    // rs.pipe(res);
    // rs.on('end', function () {
    //     res.end();
    //     console.log('end call');
    // });
    // 旧方案
    const readStream = fs.ReadStream(path)
    readStream.on('data', (chunk) => {
        console.log('chunk>>>',chunk)
        res.write(chunk)
    })
    readStream.on('close', () => {
        res.end()
    })
})
router.get('/getStreamVideo', (req, res) => {
    const myobj = url.parse(req.url,true);
    const id = myobj.query.id || 3;
    const path = `E:\\RESP\\cate_p\\${id}.mp4`



    //2. pipe方案
    // const file = fs.createReadStream(path);
    // file.pipe(res);


    //3.  readTream方案
    const readStream = fs.ReadStream(path)
    let data = Buffer(0)
    let length = 0
    let i = 0
    readStream.on('data', (chunk) => {
        console.log('data>>>>')
        length += chunk.length
        data = Buffer.concat([data, chunk], length)
        // console.log('chunk>>>', chunk)
        // if (length >= 65536 * 10) {
        //     console.log('发送数据>>')
            res.write(chunk)
        // }
        // i++
    })
    readStream.on('close', () => {
        res.end()
    })
})
router.post('/changeFileName', (req, res) => {
    const oldPath = req.body.path
    const newPath = req.body.dirPath + '\\' + req.body.inputName + req.body.path.slice(-4)
    fs.rename(oldPath, newPath, (err) => {
        if (!err) {
            res.send({
                message: 'success'
            })
        } else {
            res.sendStatus('500')
        }
    })
})
router.get('./getVideoCyberFont', (req, res) => {
    // const header = { 'Content-Type': 'video/mp4' }
    fs.createReadStream('../public/清帝逊位.mp4')
        .pipe(res)
})



// app.post('/subMitRecords', TOYS.subMitRecords)
// app.get('/getRecordsList', TOYS.getRecordsList)



module.exports = router
