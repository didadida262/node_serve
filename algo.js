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
 * @Date: 2022-12-06 09:52:27
 * @LastEditors: -_-
 * @Description:  专用于结束整军精武方案
 */


// 819--->
// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。
// 题目保证至少有一个词不在禁用列表中，而且答案唯一。
// 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
// 示例：
// 输入: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// 输出: "ball"
// 解释: 
// "hit" 出现了3次，但它是一个禁用的单词。
// "ball" 出现了2次 (同时没有其他单词出现2次)，所以它是段落里出现次数最多的，且不在禁用列表中的单词。 
// 注意，所有这些单词在段落里不区分大小写，标点符号需要忽略（即使是紧挨着单词也忽略， 比如 "ball,"）， 
// "hit"不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。
//  

// 提示：

// 1 <= 段落长度 <= 1000
// 0 <= 禁用单词个数 <= 100
// 1 <= 禁用单词长度 <= 10
// 答案是唯一的, 且都是小写字母 (即使在 paragraph 里是大写的，即使是一些特定的名词，答案都是小写的。)
// paragraph 只包含字母、空格和下列标点符号!?',;.
// 不存在没有连字符或者带有连字符的单词。
// 单词里只包含字母，不会出现省略号或者其他标点符号。



// 词频统计

const paragraph = "Bob hit a ball, b,b,b,b,c hit BALL flew far after it was hit."
const banned = ['b']
// "Bob hit a ball, the hit BALL flew far after it was hit."
// const paragraph ='a'
// const paragraph ='a.'
// const paragraph ='a,b,b,b,b,b, asd dog cat'
// 输入数组，返回各单词的个数


// // const t = delNotLetter('Bob')
// // console.log('ceshi', t)
// // console.log('ceshi', t)


