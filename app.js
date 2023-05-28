const display = document.querySelector(".display");
const control_button = document.querySelectorAll("button")
const AllSymbols = ["+", "-", "X", "AC", "%", "÷", "="]

// declearing a variable for the values
let firstValue = "",
secondValue = "",
symbol = "",
result = "";

const calculate = ()=>{
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if(symbol === "+") result = firstValue + secondValue;
    if(symbol === "-") result = firstValue - secondValue;
    if(symbol === "X") result = firstValue * secondValue;
    if(symbol === "÷") result = firstValue / secondValue;
    display.innerText = result;
    firstValue = result
    secondValue = ""
}

// ilterating throuht the buttons
for(let buttons of control_button){
    buttons.addEventListener("click", ()=>{
        const {innerText: btnValue} = buttons
        const isSymbols = AllSymbols.includes(btnValue);

        if(firstValue && isSymbols){
            secondValue && calculate();
            symbol = btnValue
        }
        else if(!symbol) firstValue += btnValue;
        else if(symbol) secondValue += btnValue;

        if(btnValue !== "=") display.innerText += btnValue;
        
    });
}