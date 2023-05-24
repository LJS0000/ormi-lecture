// const arr1 = []
// const arr2 = [1, 2, 3]
// const arr3 = new Array(4, 5, 6)

// const arr = [[1, 0], 2, 3, 4, 5]
// // console.log(arr.length)
// // console.log(arr[1])
// // console.log(arr[0][0])
// arr.pop() //마지막 값을 꺼낸다
// // console.log(arr)
// arr.push(100)
// // console.log(arr)

// const arr5 = [1, 2, 3, 4, 5]
// // splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// // array.splice(start, deleteCount, changeitem)
// arr5.splice(1, 0, 100)
// console.log(arr5)

// arr5.splice(2, 1, 2000)
// console.log(arr5)

// const arr6 = [10, 20, 30, 40, 50, 60]
// console.log(arr6.slice(2, 5))

// const arr7 = [1, 2, 3, 4, 6, 1, 7, 5]
// arr7.sort()
// console.log(arr7)

// const arr8 = [1, 2, 3, 4, 6, 11, 7, 5]
// // arr8.sort()
// // console.log(arr8)
// // arr8.sort((a, b) => a - b) //오름차순
// // console.log(arr8)
// arr8.sort((a, b) => b - a) //내림차순
// console.log(arr8)

const arr8 = [1, 11, 2, 3, 4, 5]
arr8.forEach((v, i) => {
  console.log(v, i)
})

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArr = arr11.filter((el) => el % 2 === 0)

console.log(newArr)
