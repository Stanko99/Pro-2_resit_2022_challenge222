
function earth() {

	var fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds ();

	if (secs<10){ 			/* double digit */
		secs= "0" + secs;
	}

	if (mins<10){
		mins= "0" + mins;
	}

	if (hours<10){
		hours= "0" + hours;
	}

	if (hours>12){

	}


	document. getElementById('hour'). innerHTML = hours +":" ;
	document. getElementById('minute').innerHTML = mins +":" ;
	document. getElementById('second'). innerHTML = secs;


}


setInterval(earth,900);
var movefastYu= 200;
var movefastYd= 150;
var movefastXr =220;
var movefastXl = 230;
var boxTC = document.getElementById("conta1");
var title = document.getElementById("title-earth"); 

function godown() {
	conta1.style.bottom	= 2.5 * movefastYd + "px" ;
	movefastYd --;
	// how did this work o.o 
}

function goup() {
	conta1.style.height = 2.5 * movefastYu + "px" ;
	movefastYu ++;
	
}

function goright() {
	conta1.style.left= -3 * movefastXr + "px" ; // had to call it left because it bugged otherwise idk why
	movefastXr --;


}

function goleft() {
	conta1.style.left= -2 * movefastXl + "px" ;
	movefastXl ++;


}


