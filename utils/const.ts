
const { getFiles } = require('../weapons')
const publicPath = 'E:\\theGreatFilms\\RESP'



// 视频目录
const CATEGORIES = getFiles(publicPath).map((cate) => {
    return {
        key: cate,
        path: publicPath + '\\' + cate
    }
})

// const CATEGORIES = {
//     Mv: {
//         path: publicPath + '音乐\\点歌台\\',
//     },
//     Time: {
//         path: publicPath + 'Time\\',
//     },
//     Interesting: {
//         path: publicPath + '新建文件夹\\',
//     },

// }
module.exports = {
    CATEGORIES
}