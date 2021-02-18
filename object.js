//system-1
var result = {math: 70, bangla: 95}
console.log(result)

result.english = 80;
console.log(result)

result.math = 90;
console.log(result)

//system-2
var number = Object()
number.bangla = 90
number.english = 95
console.log(number)

//access objects data
var point = {x: 10, y: 20, z: 30}
console.log(point.x)
console.log(point.y)

console.log(point.x + point.z)

//array notation
console.log(point['y'])
console.log(point['z'])

//object proparty update
var num = {a: 10, b: 20, c: 30}
console.log(num)

num.a = 15
console.log(num)
console.log(num.d)

num['b'] = 25
console.log(num)

var prop = 'c'
num[prop] = 35
console.log(num)