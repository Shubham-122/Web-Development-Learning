var a = [1,2,3,4,5,6]

var b = [...a]

b.pop()

// console.log(b)
// console.log("......")
// console.log(a)

var obj = {name: "Shubham"}

var copyobj = {...obj}

copyobj.name = "Sahai"

console.log(copyobj)
console.log("......")
console.log(obj)