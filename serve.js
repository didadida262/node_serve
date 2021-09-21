//server.js
const express = require('express'),
      server = express(),
      users = require('./users');
const qs = require('querystring');
const cors = require('cors');
server.use(cors());

server.use(express.urlencoded({extended: false})); // 现在就方便多了，express的两个方法一执行就行啦
server.use(express.json());
const User = require('./models/User');

server.get('/users',function(req,res){
  // var userid = req.params.userid;
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



// server.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });
//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/',(request,response)=>{
 response.sendFile(__dirname + '/index.html');
});

server.get('/users',(request,response)=>{
 response.json(users);
});

server.get('/word', (request, response) => {
  response.json('百般乐器，唢呐为王，不是升天，就是拜堂')
})

server.post('/signIn', (req, resp) => {
  console.log('req.body:', JSON.stringify(req.body));
  resp.send(req.body);
})
//Binding to localhost://3000
server.listen(3000,()=>{
 console.log('Express server started at port 3000');
});
