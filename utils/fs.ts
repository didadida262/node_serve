const fs = require('fs')
const path = require('path')

const getAllFile = (curPath) => {
    const absPath = path.join(curPath)
    const dirs = fs.readdirSync(absPath)
    return dirs
}

module.exports = {
    getAllFile
}
