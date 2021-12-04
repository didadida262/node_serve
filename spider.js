const https = require('https')
const http = require('http')

const serve = http.createServer((req, res) => {
    let data = ''
    https.get('https://gtv.org/video/id=61a3828b44c1fe7a6c3aaf29', (res) => {
        res.on('data', (chunk) => {
            data += chunk
        })
        res.on('end', () => {
            console.log('data:', data)
            console.log('数据完全结束')
        })
    })
})

serve.listen(3001, () => {
  console.log('3001已启动！')  
})