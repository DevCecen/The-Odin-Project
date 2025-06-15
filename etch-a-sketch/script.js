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