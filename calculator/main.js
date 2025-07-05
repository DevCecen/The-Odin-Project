const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen")

let value = ""
let value2 = ""
let result = 0;
let operator = "";

document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.currentTarget.classList.contains("num"))
        {
            let currentNumber = e.currentTarget.innerText;
            value += currentNumber;
            console.clear();
            console.log(value)
        }
        else if(e.currentTarget.classList.contains("operator")){
            let currentOperator = e.currentTarget.innerText;
            if(currentOperator == "=")
            {
                if(operator == "+")
                {
                    result = Number(value) + Number(value2);
                    value = result;
                    console.log("value:" + value)
                    console.log("value2:" + value2)
                    console.log("operator:" + operator)
                    console.log("Result:" + result);
                }
                else if(operator == "-")
                {
                    result = Number(value2) - Number(value);
                    value = result
                    console.log("value:" + value)
                    console.log("value2:" + value2)
                    console.log("operator:" + operator)
                    console.log("Result:" + result);
                }
                else if(operator == "*")
                {
                    result = Number(value) * Number(value2);
                    value = result;
                    console.log("value:" + value)
                    console.log("value2:" + value2)
                    console.log("operator:" + operator)
                    console.log("Result:" + result);
                }
                else if(operator == "/")
                {
                    result = Number(value2) / Number(value);
                    value = result;
                    console.log("value:" + value)
                    console.log("value2:" + value2)
                    console.log("operator:" + operator)
                    console.log("Result:" + result);
                }
            }
            if(value !== "")
            {
                value2 = value;
                value = ""
            }
            operator = currentOperator;
        }
    })
})



