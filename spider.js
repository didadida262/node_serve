const https = require('https')
https.get('https://gtv.org/video/id=617be96f11d1862968fccc4b', (res) => {
    let str = ''
    res.on('data', (chunk) => {
        str += chunk
    })
    res.on('end', () => {
        console.log('str:', str)
    })
})