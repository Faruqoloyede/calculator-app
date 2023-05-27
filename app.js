const display = document.querySelector(".display");
const controls_button = document.querySelectorAll("button");
const allSymbols = ["+", "-", "/", "*", "%", "=", "C"];

let firstValue = ""
let secondValue = ""
let symbols = ""
let result = ""
const calculate = ()=>{
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue)

    if(symbols === "+"){
        result = firstValue + secondValue
    }
    if(symbols === "-"){
        result = firstValue - secondValue
    }
    if(symbols === "*"){
        result = firstValue * secondValue
    }
    if(symbols === "/"){
        result = firstValue / secondValue
    }
    if(symbols === "%"){
        result = firstValue % secondValue
    }
    display.innerText = result
    firstValue = result
    secondValue = ""
}
for(let buttons of controls_button) {
    buttons.addEventListener("click", ()=>{
        const {innerText: btnValue} = buttons
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        if(firstValue && btnValueIsSymbol){
            if(secondValue) {
                calculate();
            }
            symbols = btnValue; 
        }
        else if(!symbols){
            firstValue += btnValue
        }
        else if(symbols){
            secondValue += btnValue
        }
         if(btnValue !== "="){
            display.innerText += btnValue
        }
         if(btnValue === "C"){
            firstValue = ""
            secondValue = ""
            symbols = ""
            return display.innerText = ""
        }
    });
};

