const box = document.getElementById("context")

// triggering context menu 
document.body.addEventListener("contextmenu", function(e){
    e.preventDefault()
    box.style.display = "block"
    box.style.left = e.pageX+"px"
    box.style.top = e.pageY+"px"
    console.log(e.pageX)

    console.log(e.pageY)
    if(e.pageY < 1175){

    }
})
// if click or press esc btn on box hide the menu
document.body.addEventListener("click", () =>{
    box.style.display = "none"
})

document.body.addEventListener("keydown", function(e) {
    if(e.keyCode === 27 ){
        box.style.display = "none"
       }   
      
})




