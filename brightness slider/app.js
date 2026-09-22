const container = document.querySelector(".container")
const range = document.getElementById("range")
range.addEventListener("change", ()=>{
    container.style.filter = `brightness(${range.value}%)`
})
const containerstyle = getComputedStyle(container)
console.log(containerstyle.background)