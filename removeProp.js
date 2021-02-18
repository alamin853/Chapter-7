var obj = {a: 20, b: 30, c: 50}
console.log(obj)

obj.c = undefined
console.log(obj)

delete obj.c
console.log(obj)