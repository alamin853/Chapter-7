var obj = {x: 20, y: 40, z: 60}


// console.log('x' in obj)
// console.log('p' in obj)

for(var i in obj){
    console.log(i)
    console.log(obj[i])
}