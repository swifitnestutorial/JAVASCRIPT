function nice(name) {
    console.log("hey " + name + " you are nice")    
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " your tshirt is  nice")
    console.log("hey " + name + " youre course is good to")
}
// nice ("sandy")
// nice ("akki")

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}
result1 = sum (3, 5)
result2 = sum (7, 5)
result3 = sum (5, 5 ,13)

console.log("the sum of these number : ", result1)
console.log("the sum of these number : ", result2)
console.log("the sum of these number : ", result3)

const func1 = (X)  => {
    console.log("I am the arrow function", X)
}
func1(34);
func1(66);
func1(84);