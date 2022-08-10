// all helper functions

import {GAME} from "./variables.js ";

/* use to get selected userr on strat game screen */

export function Profile(){
    GAME.selectedProfile.forEach(img => {

        img.addEventListener('click',e=>{

            let target = e.target.dataset.id;
            removeImgSelection(GAME.selectedProfile);
            document.querySelector(`[data-id='${target}']`).classList.add("selected");
            
            //swap values if user selected second profile
            if(target == 'x2'|| target == 'y2'){
                GAME.X_CLASS = "x2",
                GAME.Y_CLASS = "y2";
            }

            //set turns
            GAME.turn = target == 'y' || target == 'y2' ? true: false


        });

    });
}


/// to remove slected profile

function removeImgSelection(img){
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}

// function to use to set hover effet to cell

export function setHoverEffect(){

    GAME.boardElements.classList.remove(GAME.X_CLASS);
    GAME.boardElements.classList.remove(GAME.Y_CLASS);

    if(GAME.turn){
        GAME.boardElements.classList.add(GAME.Y_CLASS);
    }
    else{
        GAME.boardElements.classList.add(GAME.X_CLASS);

    }
}

// to add current user to the cell

export function markCell(cell,currentClass){
    cell.classList.add(currentClass);
} 

export function swapTurns(turn){
    return turn = !turn;
}