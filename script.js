let btnRef  = document.querySelectorAll(".btn");
let popupRef  = document.querySelector(".popup");
let  newgameBtn  = document.getElementById("newGame");
let restartBtn = document.getElementById("playAgain");
let msgRef = document.getElementById("sampleMsg");

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
// player 'X' plays first
let xTurn = true;
let count = 0;

//diable all buttons
const disableButtons = ()=>{
    btnRef.forEach((element) => element.disabled = true)
    //enable popup
    popupRef.classList.remove("hide")
}


const enableButtons = () =>{
    btnRef.forEach((element) =>{
        element.innerText="";
        element.disabled = false;
    })
    //disable popup
    popupRef.classList.add("hide")
}
//newgame
newgameBtn.addEventListener("click" , ()=>{
    count=0;
    enableButtons();
})
restartBtn.addEventListener("click" , ()=>{
    count=0;
    enableButtons();
})
//this function is executed when player wins
const winFunction = (letter) =>{
    disableButtons();
    if(letter == 'X'){
        msgRef.innerHTML = "'X' Wins ";
    }
    else{
        msgRef.innerHTML = " 'O' Wins";
    }
}

const drawFunction = ( ) =>{
    disableButtons();
    msgRef.innerHTML = " It's a Draw ";
}

//winner checker
const winChecker = () =>{
    for(let i of winningPattern){
        let [element1 , element2 , element3 ] = [
            btnRef[i[0]].innerText , btnRef[i[1]].innerText, btnRef[i[2]].innerText
        ];
        // check if elements are filled
        if(element1 != "" && (element2 != "") && (element3!= "")){
            if (element1 == element2 && element2 == element3){
                winFunction(element1);
            }
        }
    }
}



//Display X/O on click 
btnRef.forEach((element) =>{
    element.addEventListener("click", ()=>{
        if(xTurn){
            xTurn= false;
            element.innerText = 'X';
            element.disabled = true;
            
        }
        else{
            xTurn = true;
            element.innerText="O";
            element.disabled = true;
        }
           
        count+=1;
        if(count == 9){
            //condition of draw
            drawFunction();
        }
        
        //check for win on every click
        winChecker();  
    })
    
})



window.onload = enableButtons();