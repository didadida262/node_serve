const fs = require('fs')
const path = require('path')

export const getAllFile = (path) => {
    const absPath = path.join(curPath)
    const dirs = fs.readdirSync(absPath)
    return dirs
}

