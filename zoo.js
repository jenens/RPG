var dataObject = [
	
]




function character(){
this.health = 100;
getHealth =>{return this.health}
}

var player 1 = new janitor ("");
var player 2 = new punk ("");
var player 3 = new burgler ("");

function chooseCharacter(type){
document.getElementById("background").innerHTML="<h1>THIS WORKS!!!!!!!!!!!!</h1>";
console.log("THIS THING WORKS");
var player;
if (type==="burgler") {
	player=new burgler();
	
}

else if (type==="janitor"){
	player=new janitor();
	console.log("THIS Janitor WORKS");
	
}

else if (type==="punk") {
	player=new punk();
	console.log("THIS Punk WORKS");
	
}


return player;

function getBanana(){
	this.score = +1;
	getScore =>{return this.score}
}
}
