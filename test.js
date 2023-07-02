const  { getAllFile } = require('./fs.js')

const allFiles = getAllFile(__dirname)
console.log('allFiles>>', allFiles)