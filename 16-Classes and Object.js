// let obj = {
//     a : 1,
//     b: "sandy"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ =animal; // sets rabbit.[[prototype]] = animal

class animal{
    constructor(name){
       this.name = name 
        console.log("object is created...")
    }
    eats(){
        console.log("kahan kha raha hoo")
    }
    jumps(){
        console.log("kood raha hoo")
    }
}

class Lion extends animal{
    constructor(name){
        super()
        this.name = name 
         console.log("object is created and ge is lion...")
     }
     eats(){
        super.eats
        console.log("me khana raha hoo")
     }
}

let a = new animal("Bunny");
console.log(a)

let L = new Lion("shera")
console.log(L)