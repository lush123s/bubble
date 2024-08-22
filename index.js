function makeBubble() {

    let clutter = ''
    for (let i = 1; i <= 128; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter = clutter + `<div class="bubble">${rn}</div>`

    }
    document.querySelector('#panel-btm').innerHTML = clutter;
}

makeBubble();



let timer = 60;

function makeTimer() {
    let clear = setInterval(function () {
        if (timer > 0) {
            timer = timer - 1;
            document.querySelector('#timer').innerHTML = timer;
        } else {
            clearInterval(clear)
            document.querySelector('#panel-btm').innerHTML = '<h1>Game Over</h1>'
        }

    }, 1000)
}

makeTimer()

let hitrn = 0;

function randomhit() {
     hitrn = Math.floor(Math.random() * 10)
    document.querySelector('#hit').innerHTML = hitrn;

}
randomhit()

let score = 0;
function increaseScore() {
    score = score + 10;
    document.querySelector('#score').innerHTML = score;
}

document.querySelector('#panel-btm').addEventListener('click',function(details){
    let clickedNumber = Number(details.target.innerHTML);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        randomhit()
    }

})


