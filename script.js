console.log("start countdown...");


var countdownElem = document.getElementById("coundown")
var secondsLeft = 10;

function coundown(){
    countdownElem.textContent = secondsLeft;
    secondsLeft--;

    if (secondsLeft<0){
        countdownElem.textContent= "Happy Independence Day"
        return;
    }
    setTimeout(coundown,1000)
}
coundown( )