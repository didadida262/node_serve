const loginMiddle = (req, res, next) => {
    console.log('中间拦截阿三大苏打实打实的>>>')
    console.log('req>>>', req.body)
    next()    
}


module.exports = {
    loginMiddle
}