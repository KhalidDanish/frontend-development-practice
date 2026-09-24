const weightValue = document.querySelector("#wValue")
const heightValue = document.querySelector("#hValue")
const wshow = document.querySelector(".weight")
const hshow = document.querySelector(".height")
const result = document.querySelector(".result")
const catagory = document.querySelector(".catagory")

function checkBMI(){
    let height = Number(heightValue.value / 100)
    let weight = Number(weightValue.value)
    let BMI = (weight / (height*height)).toFixed(1)
    wshow.textContent = weightValue.value + " KG"
    hshow.textContent = heightValue.value + " CM"
    result.textContent = BMI
    if(BMI < 18.5){
        catagory.textContent = "Underweight"
        result.style.color = "red"
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        catagory.textContent = "Normal"
        result.style.color = "green"
    } else if(BMI >=25 && BMI <= 29.9){
        catagory.textContent = "Overweight"
         result.style.color = "yellow"
    } else{
        catagory.textContent ="Obese"
         result.style.color = "alevioletred"
    }
}
weightValue.addEventListener("input", checkBMI)
heightValue.addEventListener("input", checkBMI)