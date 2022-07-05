//app.js
const Blob = require('blob-polyfill')
const path = require('path')
const fs = require('fs')
const express = require('express'),
      app = express(),
      users = require('./users');
const qs = require('querystring');
const cors = require('cors');
const { crp, secretA } = require('./tools')
const Busboy = require('busboy')
const mediaPath = '../media/'
let songs = null

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





const User = require('./models/User');

app.get('/users',function(req, res){
  var params = qs.parse(req.url.split('?')[1]);
  var fn = params.callback;
  // console.log('fn:', fn)
  var userid = 1;
  var user = new User();
  user.find(userid,function(err,result){
      if(err){
          res.send('not found');
      }
      res.send(result);
  });
});





// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });
//setting the port.
app.set('port', process.env.PORT || 3000);

//Adding routes
app.get('/',(request,response)=>{
 response.sendFile(__dirname + '/index.html');
});

app.get('/users',(req,res)=>{
  res.json(users);
});

app.get('/getInfo', (req, res) => {
  // console.log('客户端的token---->', req)
  res.send({
    code: 20000,
    data: {
      word: '百般乐器，唢呐为王，不是升天，就是拜堂',
      name: 'hhvcg',
      avatar: '',
    }
  })
})

// 获取歌曲列表,默认扫描跟node项目同层级路径下media文件夹中的音频文件
app.get('/songs/list', (req, res) => {
  const mediaPath = path.join(__dirname)
  const p = mediaPath.substr(0, mediaPath.length - 11) + '\\media'
  const data = fs.readdirSync(p).filter((item) => item.includes('.mp3'))
  songs = [...data]
  console.log('扫描结果--->', data)
  res.send(data)
})

app.post('/signIn', (req, res) => {
  const token = secretA(req.body)
  const data = {
    data: req.body,
    token: token,
    code: 20000
  }
  res.send(data);
})

app.get('/img', (req, res) => {
  fs.readFile('./media/desk.jpg', 'binary', (err, data) => {
    if(err) {
      throw err
    } else {
      res.write(data, 'binary')
      res.end()
    }
  })
})
app.post('/logout', (req, res) => {
  res.send({
    code: 20000,
    data: {
      word: 'out',
    }
  })
})
app.get('/music', (req, res) => {
  console.log('req----->',req.query.index)
  console.log('songs--->', songs)
  fs.readFile(mediaPath + songs[req.query.index], 'binary', (err, data) => {
    if(err) {
      throw err
    } else {
      res.write(data, 'binary')
      res.end()
    }
  })
  
})
app.post('/upload', (req, res) => {
  // console.log('upload!')
  // console.log('req.headers:', req.headers)
  const busboy = new Busboy({ headers: req.headers });
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    const saveTo = path.join(__dirname, 'uploads', filename);
    file.pipe(fs.createWriteStream(saveTo));
  });

  busboy.on('finish', function () {
    // res.send("文件上传成功");
    fs.readFile('./media/desk.jpg', 'binary', (err, data) => {
      if(err) {
        throw err
      } else {
        res.write(data, 'binary')
        res.end()
      }
    })    
  });

  return req.pipe(busboy);
})
app.post('/sendImg', (req, res) => {
  // // console.log('反馈:', req.body)
  // var bitmap = new Buffer(req.body, 'base64');
  // fs.writeFileSync(file, bitmap);
  // // console.log('--->', req.body.imgDate)
  const unitArr = []
  const url = req.body.imgDate
  let n = req.body.imgDate.length
  for (let i = 0; i < n; i++) {
    unitArr[i] = url.charCodeAt(i)
  }
  // // console.log('unitArr:', unitArr)
  // // console.log(new Blob([unitArr], { type: 'image/jpeg' }))
  const decode = Buffer.from(req.body.imgDate , 'base64')
  fs.writeFile('./test.jpg', decode, (err) => {
    if (err) {
      // console.log('error!!!')
    } else {
      // console.log('写文件成功！！')
    }
  })
})
//Binding to localhost://3000
app.listen(3000,() => {
 console.log('Express app started at port 3000');
});


