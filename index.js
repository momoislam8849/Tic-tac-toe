
import { GAME } from "./module/variables.js ";
import {Profile, setHoverEffect, markCell, swapTurns} from "./module/helper.js"
import {checkWin} from "./module/win.js";

//game buttons
GAME.startBtn.addEventListener("click",startGame);


Profile();


//start game

function startGame(){
    setHoverEffect();

    //iterate over cells and add click event

    GAME.blockElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once:true})
    });


    GAME.startWindow.classList.add("hide");
}

//handler onclick funtion to cell

function handleClick(e){
    const cell = e.target;
    const currentClass = GAME.turn ? GAME.Y_CLASS : GAME.X_CLASS;
    markCell(cell,currentClass);

    let flag = checkWin(currentClass, GAME.blockElements).filter((win,index)=>{
            if(win){
                console.log("Win");
            }
    });
    


    GAME.turn = swapTurns(GAME.turn);
    setHoverEffect();
}



