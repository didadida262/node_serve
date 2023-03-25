// 给你两个字符串a 和b，它们长度相同。请你选择一个下标，将两个字符串都在相同的下标 分割开。
// 由a可以得到两个字符串：aprefix和asuffix，满足a = aprefix + asuffix，同理，由b 可以得到两个字符串bprefix 和bsuffix，满足b = bprefix + bsuffix。请你判断aprefix + bsuffix 或者bprefix + asuffix能否构成回文串。

// 当你将一个字符串s分割成sprefix 和ssuffix时，ssuffix 或者sprefix 可以为空。比方说，s = "abc"那么"" + "abc"，"a" + "bc"，"ab" + "c"和"abc" + ""都是合法分割。
// 如果 能构成回文字符串 ，那么请返回true，否则返回false。
// 注意，x + y表示连接字符串x 和y。

// 示例 1：
// 输入：a = "x", b = "y"
// 输出：true
// 解释：如果 a 或者 b 是回文串，那么答案一定为 true ，因为你可以如下分割：
// aprefix = "", asuffix = "x"
// bprefix = "", bsuffix = "y"
// 那么 aprefix + bsuffix = "" + "y" = "y" 是回文串。

// 示例 2：
// 输入：a = "abdef", b = "fecab"
// 输出：true

// 示例 3：
// 输入：a = "ulacfd", b = "jizalu"
// 输出：true
// 解释：在下标为 3 处分割：
// aprefix = "ula", asuffix = "cfd"
// bprefix = "jiz", bsuffix = "alu"
// 那么 aprefix + bsuffix = "ula" + "alu" = "ulaalu" 是回文串。

// 提示：
// 1 <= a.length, b.length <= 105
// a.length == b.length
// a 和b都只包含小写英文字母


// 判断回文串
const jude = (s) => {
  const arr = s.split('')
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
}


const f = (a, b) => {
  const arr_A = a.split('')
  const arr_B = b.split('')
  for (let i = 0; i <= arr_A.length;i++) {
    const aprefix = arr_A.slice(0, i + 1).join('')
    const asufffix = arr_A.slice(i + 1).join('')
    const bprefix = arr_B.slice(0, i + 1).join('')
    const bsufffix = arr_B.slice(i + 1).join('')
    
    const res1 = aprefix + bsufffix
    const res2 = bprefix + asufffix
    if (jude(res1) || jude(res2)) {
      return true
    }
  }
  return false
}

const a = 'x'
const b = 'y'
console.log(f(a, b))