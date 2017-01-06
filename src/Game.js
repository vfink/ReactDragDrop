let knightPosition = [0,0];
let observer = null;

function makeObservation(){
    observer(knightPosition);
}

export function observe(obs) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = obs;
    makeObservation();
}

export function moveKnight(toX,toY){
    knightPosition = [toX,toY];
    makeObservation();

}







