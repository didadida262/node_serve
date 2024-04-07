// 找出和最大的连续字数组


const arr = [-1, 4, -5, 3, 9, -1]

// 1. 复杂度n平方，双层for循环
const f = () => {
    let max = -Infinity
    let res = null
    for (let  i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const cur = arr.slice(i, j + 1)
            const sum = cur.reduce((prev, item, index) => {
                return prev + item
            }, 0)
            if (sum >= max ) {
                res = [...cur]
                max = sum
            }
        }
    }
    return res
}

// console.log(f())

// 2. 复杂度n
const f2 = () => {
    let sum = 0
    let ans = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (sum >= 0) {
            sum = sum + arr[i]
        } else {
            sum = arr[i]
        }
        ans = Math.max(ans, sum)
    console.log('sum:',sum)

    }
    return ans
}
console.log(f2())