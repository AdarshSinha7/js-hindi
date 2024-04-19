const arr=[0,1,2,3,4,5]
console.log(arr[0])

// const newArr=new Array(1,2,3,4,5)
// console.log(newArr[0])

// arr.push(6)
// arr.push(7)
// arr.pop()
// arr.unshift(8)
// arr.shift()
// arr.shift()
// console.log(arr)

//slice and splice //splice manipulates original array

const narr=arr.slice(1,3)
console.log(narr);

const marr=arr.splice(1,3)
console.log(marr);