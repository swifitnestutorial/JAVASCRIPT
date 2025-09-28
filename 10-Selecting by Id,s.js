console.log("box")
        // let box = document.getElementsByClassName("box")
        // console.log(box)

        // box[2].style.backgroundColor =  "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

// document.querySelector(".container").contains(e[2])
// true
// document.querySelector(".container").contains(e[0])
// true
// document.querySelector(".container").contains(document.querySelector("body"))
// false
// document.querySelector("body").contains(document.querySelector(".container"))
// true