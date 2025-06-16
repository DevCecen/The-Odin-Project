const container = document.querySelector("#container");
let squareValue = 16;
let squareSize = 1920 / squareValue;
let mouseIsDown = false;
let currentColor = "#000000";
let rainbowButton = false;
let colorMode = "color";

document.querySelector("#color-picker").addEventListener("input",()=>{
    colorMode = "color";
})
document.querySelector("#rainbow-btn").addEventListener("click",()=>{
    colorMode = "rainbow";
})
document.querySelector("#eraser-btn").addEventListener("click",()=>{
    colorMode = "eraser";
})

function generateGrid(){
    for(let i=0; i<(squareValue**2); i++)
    {
        const square = document.createElement("div");
        square.setAttribute("class","squares");
        container.appendChild(square);
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    }
}

function paint(){
    const squares = document.querySelectorAll(".squares");
    const clearBtn = document.querySelector("#clear-btn");
    squares.forEach(square=>{
        square.addEventListener("mouseover",()=>{
            if(colorMode == "color")
            {
                if(mouseIsDown ==true)
                {
                square.style.backgroundColor = currentColor;
                }
            }
            else if(colorMode == "rainbow")
            {
                if(mouseIsDown == true)
                {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${red},${green},${blue})`;
                }
            }
            else if(colorMode == "eraser")
            {
                if(mouseIsDown == true)
                {
                    square.style.backgroundColor = "white";
                }
            }
        })
        clearBtn.addEventListener("click",()=>{
            square.style.backgroundColor = "white";
        })
    })
}


function mouseClick(){
    document.body.addEventListener("mousedown",()=>{
        mouseIsDown = true;
    })
    document.body.addEventListener("mouseup",()=>{
        mouseIsDown = false;
    })
}

function colorpicker(){
    const colorPicker = document.querySelector("#color-picker");
    colorPicker.addEventListener("input",(e)=>{
        currentColor = e.target.value;
    })
}

function resizeGrid()
{
    const resizeBtn = document.querySelector("#resize-btn");
    resizeBtn.addEventListener("click",()=>{
        let inputValue = Number(prompt("Please enter the size:"));
        if(inputValue>0 && inputValue<101)
        {
            container.innerHTML = "";
            let squareValue = inputValue;
            let squareSize = 1920 / squareValue;
            for(let i=0; i<(squareValue**2); i++)
            {
                const square = document.createElement("div");
                square.setAttribute("class","squares");
                container.appendChild(square);
                square.style.width = `${squareSize}px`;
                square.style.height = `${squareSize}px`;
            }
            paint();
        }
        else
        {
            alert("Please enter a value between 1 and 100");
        }
    })
}





















function start()
{
    generateGrid();
    mouseClick();
    colorpicker();
    paint();
    resizeGrid();
}

start();