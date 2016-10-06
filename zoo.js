function character(type){
this.health = 100;
getHealth =>{return this.health}
this.banana = 1;
getBanana =>{return this.banana}
}


function chooseCharacter(type){
document.getElementById("background").innerHTML="<h1>THIS WORKS!!!!!!!!!!!!</h1>";
console.log("THIS THING WORKS");
var player;
if (type==="burgler") {
	player=new burgler();
	
}

else if (type==="janitor"){
	player=new janitor();
	
}

else if (type==="punk") {
	player=new punk();
	
}


return player;

function getBanana(){
	this.score = +1;
	getScore =>{return this.score}
}
}

// var player 1 = new janitor ("");
// var player 2 = new punk ("");
// var player 3 = new burgler ("");

 // document.getElementById("page2").src = "camel.png";

 // document.getElementById(content.style.display none)

