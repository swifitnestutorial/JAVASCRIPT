//interview quetions
//the magical sorting Hat: imagine you are creating a magical hat for a wizard scholl. implement a javascript function that takes an array of students names and assigns them to one of the four houses (gryffindor (length less than 6), Hufflepuff(less than 8), revenclaw(legnht less than 12), or slytherin (length greater or equal to 12)) based on the length of their names.

// let students = ["sandy", "kartik", "parachi", "akki", "harsh", "krishna"]

// let houses = []

// for (const student of students) {
//     if(student.length < 6){
//         houses.push("Gryffindor")
//     }
//     else if (student.length < 8) {
//         houses.push("Hufflepuff")
//     }
//     else if(student.length < 12) {
//         houses.push("RavenClaw")
//     }
//     else{
//         houses.push("Slytherin")
//     }
// }

// console.log(houses)

function saveNoteToLocalStorage(note) {
    localStorage.setItem("note",note);
}

let note = localStorage.getItem("note")
if (note) {
    // document.write(note)
    document.querySelector(".note").innerHTML = note
}

document.querySelector("button").addEventListener
("click",() => {
    let note = prompt("enter your note")
    saveNoteToLocalStorage(note)
    document.write(note)
})