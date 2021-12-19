const cpu = require('os').cpus()
const fork = require('child_process').fork

for (let i = 0; i < cpu.length; i++) {
    console.log(i)
    fork('./worker.js')
}