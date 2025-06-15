const container = document.querySelector("#container");
let squareValue = 16;
let squareSize = 1920 / squareValue;
let mouseIsDown = false;
let currentColor = "#000000";

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

function paint()
{
    const squares = document.querySelectorAll(".squares");
    squares.forEach(square =>{
        square.addEventListener("mouseover",()=>{
            if(mouseIsDown == true)
            {
                square.style.backgroundColor = currentColor;
            }
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



















function start()
{
    generateGrid();
    mouseClick();
    colorpicker();
    paint();
}

start();