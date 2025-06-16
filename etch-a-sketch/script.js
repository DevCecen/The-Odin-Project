const container = document.querySelector("#container");
let squareValue = 16;
let squareSize = 1920 / squareValue;
let mouseIsDown = false;
let currentColor = "#000000";
let rainbowButton = false;
let colorMode = "color";
let gridMode = false;

document.querySelector("#color-picker").addEventListener("input",()=>{
    colorMode = "color";
})
document.querySelector("#rainbow-btn").addEventListener("click",()=>{
    colorMode = "rainbow";
})
document.querySelector("#eraser-btn").addEventListener("click",()=>{
    colorMode = "eraser";
})
document.querySelector("#grid-btn").addEventListener("click",()=>{
    if(gridMode == false)
    {
        gridMode = true;
    }
    else if(gridMode == true)
    {
        gridMode = false;
    }
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
    const gridBtn = document.querySelector("#grid-btn");
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
    gridOnOff();  
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


function gridOnOff()
{
    const squares = document.querySelectorAll(".squares")
    const gridBtn = document.querySelector("#grid-btn");
     gridBtn.addEventListener("click",()=>{
        squares.forEach(square =>{
            if(gridMode == true)
            {
                square.style.border = "1px solid black";
            }
            else if(gridMode == false)
            {
                square.style.border = "none";
            }
        })
    })
}

function start()
{
    gridOnOff();
    generateGrid();
    mouseClick();
    colorpicker();
    resizeGrid();
    paint();
}

start();