var obj = {x: 20, y: 40, z: 60}

console.log(obj)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


var obj2 = Object.assign({}, obj)
obj2.x = 50
console.log(obj2)