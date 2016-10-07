var dataObject = [
	
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
document.getElementById("background").innerHTML="<h1></h1>";
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




