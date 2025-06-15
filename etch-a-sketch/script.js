const container = document.querySelector("#container");
let squareValue = 16;
let squareSize = 1920 / squareValue;
let mouseIsDown = false;

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
                square.style.backgroundColor = "black";
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
