const loginMiddle = (req, res, next) => {
    console.log('>>>req', req)
    console.log('>>>---------------referer', req.get('referer'))
    console.log('>>>---------------body', req.body)
    console.log('>>>---------------params', req.params)
    next()    
}


module.exports = {
    loginMiddle
}