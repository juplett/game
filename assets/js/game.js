'use strict';

let clickedTime;
let createdTime;
let reactionTime; 
let i = 0;
let coutDown = 10;
const audio = new Audio('assets/audio/alex-productions-epic-cinematic-gaming-cyberpunk-reset.mp3');
const start = document.getElementById('strBtn');
// starts game


function startGame() {
   document.getElementById("game").style.display = "block";
   document.getElementById("start").style.display = "none";
   audio.play();


  }



// Timer


function timer(){
   
        coutDown--;
        document.getElementById('timer').innerText = `Time: ${coutDown}`;
    if(coutDown <= 0){
        document.getElementById('timer').innerText = `Time: 0`;
    }
}




// sets time box appears
    function makeBox() {
          let time = Math.random();
          time = time*10;

      setTimeout(function() {



// set boundries 
      let top = Math.random();
          top = top*500;
      let left = Math.random();
          left = left*1100; 

      document.getElementById("board").style.top = top + "px";
      document.getElementById("board").style.left = left + "px"; 

    //   points

    i++;
    document.getElementById('points').value = i;


      document.getElementById("board").style.display="block";

//   sets time when box is made
          createdTime=Date.now();

      }, time); 

  }

      document.getElementById("board").onclick=function() {


          makeBox();

      }

      makeBox();

  


      function gameEnd(){
        if(coutDown <= 0){
            document.getElementById("game").style.display = "block";
            document.getElementById("start").style.display = "none";
            audio.stop();
            document.getElementById('win').innerText = `You got ${i} Points`;
        }
    }

setInterval(timer, 1000);