function writeCards(names, eventName){
    let cardsArray = [];
    for(let i = 0 ; i < names.length; i++){
        cardsArray[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    }
    return cardsArray;
}

function countDown(posInteger){
    while(posInteger >= 0){
        console.log(posInteger);
        posInteger--;
    }
}