var randomEvents = [
	{ situation: "YAY! You ran faster than the cheetah!", getHealth: 10, getBanana: 0},
	{ situation: "OH NO! Kangaroo tried to fight you and you lost!", getHealth: -10, getBanana: 0},	
	{ situation: "YAY! You got to take a ride on the carousel!", getHealth: 0, getBanana: 10},
	{ situation: "OH NO! You were attacked by a lion!", getHealth: -10, getBanana: 0},
	{ situation: "OH NO! You were attacked by a hippo!", getHealth: -10, getBanana: 0},
	{ situation: "YAY! You get to do aerobics with the elephants!", getHealth: 0, getBanana: 10},
	{ situation: "OH NO! A monkey stole your bananas!", getHealth: 0, getBanana: -10},
	{ situation: "YAY! You get to swim the dolphins!", getHealth: 10, getBanana: 5},
	{ situation: "OH NO! A porcupine shot his quills at you!", getHealth: -10, getBanana: 0},
	{ situation: "YAY! A koala gave you a banana he found!", getHealth: 0, getBanana: 5},
	{ situation: "OH NO! You were spit on by a llama named Tina!", getHealth: -10, getBanana:0},
	{ situation: "YAY! A monkey gave you his bananas!", getHealt: 0, getBanana: 10},
]


function character(){
var health = 100;
this.getHealth = function(){return health};
this.banana = 1;
getBanana =>{return this.banana}
}

// burglar, punk and janior inherit from character function

function burgler(color){
	this.mask = color;
	this.runningshoes = true;
}

function punk(color){
	this.hair = color;
	this.radio = true;
}

function janitor(color){
	this.mop = color;
	this.cleaningcart = true;
}

burgler.prototype=new character();
punk.prototype=new character();
janitor.prototype=new character();

var player1 = new punk("pink");
var player2 = new janitor("blue");
var player3 = new burgler("black");


// Choose Character function has else/if statements

function chooseCharacter(type){
var player;
if (type==="burgler") {
	console.log("this burgler works");
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

function hideAll () {
document.getElementById("prologue").style.display="none";
document.getElementById("aquarium").style.display="none";
document.getElementById("safari").style.display="none";
document.getElementById("jungle").style.display="none";
document.getElementById("pettingZoo").style.display="none";
document.getElementById("elephantEnclosure").style.display="none";
document.getElementById("monkeyEnclosure").style.display="none";
document.getElementById("reptileEnclosure").style.display="none";
document.getElementById("lionEnclosure").style.display="none";
document.getElementById("beekeepersHouse").style.display="none";
document.getElementById("birdEnclosure").style.display="none";
}

function showOne(thingToShow){
	document.getElementById(thingToShow).style.display="block";
}
// hideAll();
// showOne("jungle");


