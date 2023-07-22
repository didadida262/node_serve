/*
 *           佛曰:  
 *                   写字楼里写字间，写字间里程序员；  
 *                   程序人员写程序，又拿程序换酒钱。  
 *                   酒醒只在网上坐，酒醉还来网下眠；  
 *                   酒醉酒醒日复日，网上网下年复年。  
 *                   但愿老死电脑间，不愿鞠躬老板前；  
 *                   奔驰宝马贵者趣，公交自行程序员。  
 *                   别人笑我忒疯癫，我笑自己命太贱；  
 *                   不见满街漂亮妹，哪个归得程序员？
 * 
 * @Author: Hhvcg
 * @Date: 2022-02-28 10:07:23
 * @LastEditors: Hhvcg
 * @Description: websocket服务端
 */

// 引入插件
const ws = require('nodejs-websocket')
// 只要有用户链接，函数就会执行，会给当前链接的用户创建一个connect对象
const server = ws.createServer((connect)=>{
    console.log('连接成功')
    // console.log(connect)
    // 注册text事件 ，接收用户传递过来的数据
    connect.on('text',data=>{
        console.log('接收客户端数据---->', data)
        // 给所有用户发送消息
        broadcast(server, data)
    })
    // 连接断开，触发事件close
    connect.on('close',()=>{
        console.log('用户链接断开--close')
    })
    // 用户链接断开
    connect.on('error',err=>{
        console.log('err', err)
    })

}).listen(3002,()=>{
    console.log('websocket服务启动成功了')
})

// 给所有人发消息
function broadcast(server,msg){
    server.connections.forEach(user => {
        user.send(msg)
    });
}