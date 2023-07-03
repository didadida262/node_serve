const loginMiddle = (req, res, next) => {
    console.log('中间拦截>>>')
    console.log('req>>>', req.body)
    next()    
}


module.exports = {
    loginMiddle
}