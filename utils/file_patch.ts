const fs = require('fs')
const path = require('path')

const getAllFile = (path: String) => {
    const absPath = path.join(path))
    const dirs = fs.readdirSync(absPath)
    return dirs
}



