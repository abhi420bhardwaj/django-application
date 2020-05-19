var heading = document.querySelector("h1");
var gameOver = document.querySelector(".lead");
function getRandomColor(){
	var hexCode = '0123456789ABCDEF';
	var color = "#" ;
	for(i=0;i<=5;i++){

		color += hexCode[Math.floor(Math.random() * 16)];

	}
	return color;
}

function changeColor(){
	currentColor = getRandomColor() ;
	heading.style.color = currentColor ;
}

 setInterval("changeColor()",1000);



 var headTwo = document.querySelectorAll('td');

 var refresh = document.querySelector("button");

 var next = document.querySelector("#next");

 function nextMove(){
 	checkWinner();
 }

 function restart(){
 	for(i=0;i<headTwo.length;i++){

 			headTwo[i].textContent = '';
 	}
 	gameOver.textContent = "This is beta version of the game.Try this out.";
 }

 refresh.addEventListener("click",restart);
 next.addEventListener("click",nextMove);

function checkWinner(){

	if( headTwo[0].textContent===headTwo[1].textContent && headTwo[0].textContent===headTwo[2].textContent && (headTwo[0].textContent === 'X'|| headTwo[0].textContent === 'O') ||
		headTwo[3].textContent===headTwo[4].textContent && headTwo[3].textContent===headTwo[5].textContent && (headTwo[3].textContent === 'X'|| headTwo[3].textContent === 'O') ||
		headTwo[6].textContent===headTwo[7].textContent && headTwo[6].textContent===headTwo[8].textContent && (headTwo[6].textContent === 'X'|| headTwo[6].textContent === 'O') ||
		headTwo[0].textContent===headTwo[3].textContent && headTwo[0].textContent===headTwo[6].textContent && (headTwo[0].textContent === 'X'|| headTwo[0].textContent === 'O') ||
		headTwo[1].textContent===headTwo[4].textContent && headTwo[1].textContent===headTwo[7].textContent && (headTwo[1].textContent === 'X'|| headTwo[1].textContent === 'O') ||
		headTwo[2].textContent===headTwo[5].textContent && headTwo[2].textContent===headTwo[8].textContent && (headTwo[2].textContent === 'X'|| headTwo[2].textContent === 'O') ||
		headTwo[0].textContent===headTwo[4].textContent && headTwo[0].textContent===headTwo[8].textContent && (headTwo[0].textContent === 'X'|| headTwo[0].textContent === 'O') ||
		headTwo[2].textContent===headTwo[4].textContent && headTwo[2].textContent===headTwo[6].textContent && (headTwo[2].textContent === 'X'|| headTwo[2].textContent === 'O') ){
	
	gameOver.innerHTML = "<p>This is beta version of the game.Try this out.</p> <div style='text-align:center;border:5px solid red;'> <h1> GAME OVER !!!</h1><p><strong><em> Please restart/refresh to play again .</em></strong> </p></div>";
	}
}

 function write(){
 	if(this.textContent === ''){
 		this.textContent = "X";
        this.style.color = 'blue';
	}
	else if(this.textContent === 'X'){
		    this.textContent = "O";
            this.style.color = 'red'; 
        }
    else{
    	this.textContent = '';
    }
   	
 }
 

headTwo.forEach(function(item){
	item.addEventListener("click",write);
	
});