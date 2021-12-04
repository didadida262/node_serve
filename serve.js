//app.js
const path = require('path')
const fs = require('fs')
const express = require('express'),
      app = express(),
      users = require('./users');
const qs = require('querystring');
const cors = require('cors');
const { crp } = require('./tools')
const Busboy = require('busboy')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




const User = require('./models/User');
const { fstat } = require('fs');

app.get('/users',function(req, res){
  var params = qs.parse(req.url.split('?')[1]);
  var fn = params.callback;
  console.log('fn:', fn)
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

app.get('/users',(request,response)=>{
  response.json(users);
});

app.get('/word', (request, response) => {
  response.json('百般乐器，唢呐为王，不是升天，就是拜堂')
})

app.post('/signIn', (req, res) => {
  console.log('req.body:', req.body);
  const token = crp(req.body)
  res.send(token);
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
app.post('/upload', (req, res) => {
  console.log('upload!')
  console.log('req.headers:', req.headers)
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
//Binding to localhost://3000
app.listen(3000,()=>{
 console.log('Express app started at port 3000');
});


