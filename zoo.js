var dataObject = [
	
]




function character(){
this.health = 100;
getHealth =>{return this.health}
}



function chooseCharacter(type){
document.getElementById("background").innerHTML="<h1>THIS WORKS!!!!!!!!!!!!</h1>";
console.log("THIS THING WORKS");
var player;
if (type==="burgler") {
	player=new burgler();
	
}

else if (type==="janitor"){
	console.log("THIS Janitor WORKS");
	player=new janitor();

	
}

else if (type==="punk") {
	console.log("THIS Punk WORKS");
	player=new punk();
	
}


return player;

function getBanana(){
	this.score = +1;
	getScore =>{return this.score}
}
}
