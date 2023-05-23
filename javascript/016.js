let obj = {
  id: 'licat',
  pw: '1234',
  name: 'leejisu',
  email: 'jisu@naver.com',
  active: false,
}

console.log(obj.id, obj['id'])

let a = 10
let e = { a }
console.log(e)

// 유사배열객체
let txt = {
  0: 'h',
  1: 'e',
  2: 'l',
  3: 'l',
  4: 'o',
}

console.log(txt[0], txt[1])

let user = {
  id: 'licat',
  pw: '1234',
  name: 'leehojun',
  email: 'hojun@gmail.co.kr',
  active: false,
}
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
