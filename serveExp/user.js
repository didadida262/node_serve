const { crp, secretA } = require('../weapons')

const SIGN = {
    signIn: (req, res) => {
        console.log('>>>>,',req.body)
        const token = secretA(req.body)
        const data = {
            data: req.body,
            token: token,
            code: 20000
        }
        res.send(data);
    },
    logOut: (req, res) => {
        res.send({
            code: 20000,
            data: {
                word: 'out',
            }
        })
    },
    getInfo: (req, res) => {
        res.send({
            code: 20000,
            data: {
            word: '百般乐器，唢呐为王，不是升天，就是拜堂',
            name: 'hhvcg',
            avatar: '',
            }
        })

    }
    //   })    
}

module.exports = {
    SIGN
}