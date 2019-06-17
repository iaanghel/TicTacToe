function startGame(){
	whiteBoard();
	window.turn='X';
	
	setMessage(window.turn+' incepe');
}



function setMessage(msg){
	
	
	document.getElementById('mesage').innerText=msg;
	
	
}

function nextMove(square){
	
	if(square.innerText==""){
		square.innerText=window.turn;
		switchTurn();
	}else{
		setMessage("alege un spatiu gol");
		
	}
	
	
		
}

function checkWinner(move){
	var result =false;
	if(checkRow(1,2,3, move) || checkRow(4,5,6, move) || checkRow(7,8,9, move) || checkRow(1,4,7, move) || checkRow(2,5,8, move) || checkRow(3,6,9, move) || checkRow(1,5,9, move) ||  checkRow(3,5,7, move) ){
		result= true;
	}
	return result;
}

function checkRow(a,b,c,move){
	var result =false;
	if (getBox(a)==move && getBox(b)==move && getBox(c)==move ){
		result =true;
		
	}
	return result
	
}
function getBox(a){
	return document.getElementById(a).innerText;
}

function whiteBoard(){
	for(var i = 1 ;i<=9; i++){
		document.getElementById(i).innerText='';
	}
	
	
	
	
}
function switchTurn(){
	if(checkWinner(window.turn)){
		setMessage(window.turn+' a castigat');
		
		
	}else if(window.turn =='X'){
		window.turn ='O';
		setMessage('Este randul lui '+window.turn);
		
	}else{
		window.turn ='X';
		setMessage('Este randul lui '+window.turn);
	}
}111111111111111111111111111