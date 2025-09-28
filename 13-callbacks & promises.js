console.log("sandy is hacker ")
console.log("harsh is a hecker")

setTimeout(() => {
    console.log("I am inside settimout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimout 2")
}, 0);

console.log("the end ")

const fn = (params) =>{
    console.log("nothing")
}

const callback = (arg, fn)=> {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc =  Document.createElement(script);
    sc.src = src;
    sc.onload = callback("sandy",fn);
    Document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)