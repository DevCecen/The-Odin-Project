const container = document.querySelector("#container");
let squareValue = 16;
let squareSize = 1920 / squareValue;
let mouseIsDown = false;
let currentColor = "#000000";
let rainbowButton = false;

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

//old function
// function paint()
// {
//     const squares = document.querySelectorAll(".squares");
//     squares.forEach(square =>{
//         square.addEventListener("mouseover",()=>{
//             if(mouseIsDown == true)
//             {
//                 square.style.backgroundColor = currentColor;
//             }
//         })
//     })
// }

function paint(){
    const squares = document.querySelectorAll(".squares");
    const rainbowBtn = document.querySelector("#rainbow-btn");
    rainbowBtn.addEventListener("click",()=>{
        rainbowButton = !rainbowButton;
        squares.forEach(square => {
            square.addEventListener("mouseover",()=>{
                if(rainbowButton ==true)
                {
                    if(mouseIsDown==true)
                    {
                       let red = Math.floor(Math.random() * 256);
                       let green = Math.floor(Math.random() * 256);
                       let blue = Math.floor(Math.random() * 256);
                       square.style.backgroundColor = `rgb(${red},${green},${blue})`;
                    }
                }
                else if(rainbowButton == false)
                {
                    if(mouseIsDown == true)
                    {
                        square.style.backgroundColor = currentColor;
                    }
                }
            })
        })
    });
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

//old function
// function rainbow(){
//     const rainbowBtn = document.querySelector("#rainbow-btn");
//     const squares = document.querySelectorAll(".squares");
//     rainbowBtn.addEventListener("click",()=>{
//         rainbowButton = !rainbowButton;
//         squares.forEach(square =>{
//             square.addEventListener("mouseover",()=>{
//                 if(mouseIsDown == true)
//                 {
//                     if(rainbowButton == true)
//                     {
//                     let red = Math.floor(Math.random() * 256);
//                     let green = Math.floor(Math.random() * 256);
//                     let blue = Math.floor(Math.random() * 256);
//                     square.style.backgroundColor = `rgb(${red},${green},${blue})`;
//                     }
//                     else if(rainbowButton == false)
//                     {
//                         square.style.backgroundColor = currentColor;
//                     }
//                 }
//             })
//         })
//     });
// }

          













function start()
{
    generateGrid();
    mouseClick();
    colorpicker();
    paint();
    resizeGrid();
}

start();