
// node模块标准为commonjs
// app的index，统一引入各个必须模块，按需引入各api文件

//app.js
const { SIGN }  = require('./user')
const { VIDEO }  = require('./videoApi')
const Blob = require('blob-polyfill')
const path = require('path')
const express = require('express'),
      app = express(),
      users = require('../users');
const qs = require('querystring');
const cors = require('cors');
const Busboy = require('busboy')
const node_respPath = __dirname.split(path.sep).slice( 0, __dirname.split(path.sep).length - 1).join('\\') + '\\node_resp'
const mediaPath = node_respPath + '\\media\\'

const categoryObj = {
  socialPath: 'F:\\Public_disk\\' + 'the great films' + '\\Time\\',
  mvPath: 'F:\\Public_disk\\音乐\\点歌台\\',
  intrestingPath: 'G:\\存档资料\\新建文件夹\\'
}
let songs = null

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post('/signIn', SIGN.signIn)
app.post('/logOut', SIGN.logOut)
app.get('/getInfo', SIGN.getInfo)

app.post('/getVideosList', VIDEO.getVideosList)
app.post('/getVideo', VIDEO.getVideo)
app.get('/getCates', VIDEO.getCates)

// //Binding to localhost://3000
app.listen(3000,() => {
    console.log('Express app started at port 3000');
});
