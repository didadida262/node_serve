/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑     永不宕机     永无BUG
 * 
 *        佛曰:  
 *                写字楼里写字间，写字间里程序员；  
 *                程序人员写程序，又拿程序换酒钱。  
 *                酒醒只在网上坐，酒醉还来网下眠；  
 *                酒醉酒醒日复日，网上网下年复年。  
 *                但愿老死电脑间，不愿鞠躬老板前；  
 *                奔驰宝马贵者趣，公交自行程序员。  
 *                别人笑我忒疯癫，我笑自己命太贱；  
 *                不见满街漂亮妹，哪个归得程序员？
 * 
 * @Author: Hhvcg
 * @Date: 2022-10-23 14:27:49
 * @LastEditors: -_-
 * @Description: 
 */


const fs = require('fs')
const path = require('path')
const express = require('express'),
      app = express(),
      users = require('../users');
const qs = require('querystring');
const cors = require('cors');
const Busboy = require('busboy')
const req = require('express/lib/request')
const node_respPath = __dirname.split(path.sep).slice( 0, __dirname.split(path.sep).length - 1).join('\\') + '\\node_resp'

const loginRouter = require('./Routes/login')
// const videoRouter = require('./Routes/video')
// const musicRouter = require('./Routes/music')
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(loginRouter)
// app.use(videoRouter)
// app.use(musicRouter)

// 获取测试图片
app.get('/getTestImg', (req, res) => {
    fs.readFile('../assets/mody.jpg', 'binary', (err, data) => {
        if (err) {
            throw err
        } else {
            res.write(data, 'binary')
            res.end()
        }
        
    })
})

// //Binding to localhost://3000
// app.listen(3000,'192.168.0.106',() => {
//     console.log('Express app started at port 3000');
// });
app.listen(3001,() => {
    console.log('Express app started at port 3000');

});
