let btn = document.getElementById("btn");


btn.addEventListener("dblclick", ()=>{
    // alert("I was clicked yey...")
    document.querySelector(".box").innerHTML ="<b> yayy you were clicked </b> Enjoy your click!"
    })

btn.addEventListener("click", ()=>{
    alert("Dont hack us by  right click please")
    })

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
    // alert("Dont hack us by  right click please")
    })