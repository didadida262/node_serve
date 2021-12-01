const querystring = require('querystring')
const people = {
    name: 'hhvcg',
    old: 10
}
const encode = querystring.encode(people)
const decode = querystring.decode(encode)
console.log('encode:', encode)
console.log('decode:', decode)