
import { GAME } from "./module/variables.js ";
import {Profile,isDraw,endGame, setHoverEffect, markCell, swapTurns} from "./module/helper.js"
import {checkWin,WIN_COMBINATIONS} from "./module/win.js";

//game buttons
GAME.startBtn.addEventListener("click",startGame);
GAME.restartBtn.addEventListener("click",startGame);
GAME.drawBtn.addEventListener("click",startGame);

Profile();


//start game

function startGame(){
    setHoverEffect();

    //iterate over cells and add click event

    GAME.blockElements.forEach(cell => {
        cell.classList.remove(GAME.X_CLASS);
        cell.classList.remove(GAME.Y_CLASS);
        cell.classList.remove("win");
        cell.removeEventListener("click",handleClick);
        cell.addEventListener('click', handleClick, {once:true})
    });


    GAME.startWindow.classList.add("hide");
    GAME.winEL.classList.remove("show");
    GAME.drawEL.classList.remove("show");
    GAME.winnerImg.children.length ? GAME.winnerImg.removeChild(GAME.winner): null;
}

//handler onclick funtion to cell

function handleClick(e){
    const cell = e.target;
    const currentClass = GAME.turn ? GAME.Y_CLASS : GAME.X_CLASS;
    markCell(cell,currentClass);

    let flag = checkWin(currentClass, GAME.blockElements).filter((win,index)=>{
            if(win){

                //set green background to the winner

                WIN_COMBINATIONS[index].map(i => {
                    GAME.blockElements[i].classList.add('win');
                })


                //set the winner
                GAME.winner = GAME.blockElements[WIN_COMBINATIONS[index][0]].cloneNode(true);
                return win!==false;
            }
    });


    // check for win or draw

    if(flag.length){
        endGame(false,GAME.winEL,GAME.drawEL);
        GAME.winnerImg.append(GAME.winner);
    }
    else if(isDraw(flag)){
        endGame(true, GAME.winEL,GAME.drawEL); 
    }
    


    GAME.turn = swapTurns(GAME.turn);
    setHoverEffect();
}



