// settle means resolve or reject 
// resolve means Promise has settled successfully 
// reject means promise has not settled successfully


// async function getData() {
//     // simulate getting data from a servor 
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
async function getData() {
    // simulate getting data from a servor 
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
async function main(){
console.log("Loading modules")

console.log("do something else")

console.log("Load data")

let data = await getData()

console.log(data)

console.log("process data")

console.log("task 2")
}
main()

// data.then((v)=>{

// console.log(data)

// console.log("Process data")

// console.log("task 2")

// })


