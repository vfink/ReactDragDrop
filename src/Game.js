let cardPosition = [];
let observer = null;
let selected_id = null;

function makeObservation(){
    observer(cardPosition);
}

export function set_ID(id){
    selected_id = id
}

export function makeCard(){
    cardPosition[cardPosition.length] = [0,0]
    makeObservation();
}

export function observe(obs) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = obs;
    makeObservation();
}

export function moveCard(toX,toY,ind = selected_id){

    for (let i = 0; i<cardPosition.length;i++){
        console.log(i,cardPosition[i], [toX,toY], selected_id);
        if (cardPosition[i][0] ==  toX && cardPosition[i][1] == toY && i!=selected_id){
            cardPosition[i] = [toX,toY+1]
        }
    }

    cardPosition[ind] = [toX,toY];
    makeObservation();

}







