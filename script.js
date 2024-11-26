let currsor = document.querySelector('.cursor');
let holes = document.querySelectorAll('.hole');
let scoree = document.querySelector('#score');
let score = 0;
let newgame = document.querySelector('#startButton');
const timerElement = document.getElementById("time");
let end = false;
let remainingTime = 20;
document.addEventListener('mousemove', (e) => {
    currsor.style.left = e.pageX + 'px';
    currsor.style.top = e.pageY + 'px';
});

function run() {
    let i = Math.floor(Math.random() * holes.length);
    // let timerInterval = setInterval(updateTimer, 1000);

    let hole = holes[i];
    let img = document.createElement('img');
    img.src = 'mole.png';
    hole.appendChild(img);
    let timer = null;
    img.addEventListener('click', () => {
        img.src = 'mole-whacked.png';
        score += 10;
        scoree.innerText = score;
        setInterval(() => {
            hole.removeChild(img);
            run();
        }, 1300);
    });
    timer = setInterval(() => {
        hole.removeChild(img);
        run();

    }, 1300);
}

function updateTimer() {
    timerElement.textContent = remainingTime;
    if (remainingTime > 0) {
        remainingTime--;
console.log("H")
    } 

else {
    time("clear")
    console.log(end)
if(end === false){
        alert("Countdown finished!");
        score = 0;
        end = true;
remainingTime = 20;
console.log("A")
    }}
}

let timerInterval;

const time = (x) =>{

if(x === "clear"){
console.log("dshgf")
    clearInterval(timerInterval);

}
else{
     timerInterval = setInterval(updateTimer, 1000);

}

}

run()


newgame.addEventListener('click', () => {
end = false
    score = 0;
    scoree.innerText = score;
time("start")
    updateTimer();
});