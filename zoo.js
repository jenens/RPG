var randomSituations = [
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

var randomOccurrence = [];
for (var i=0; i < 1; i++){
	random()
}

console.log(randomEvent);

function random(){
	var cycle = randomSituations[Math.floor(Math.random() * randomSituations.length)];

if (randomOccurrence.indexOf(cycle) == -1)
	randomOccurrence.push(cycle);
else
	random();
}


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

// burgler.prototype=new character();
// punk.prototype=new character();
// janitor.prototype=new character();

// var player1 = new punk("pink");
// var player2 = new janitor("blue");
// var player3 = new burgler("black");


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

document.getElementById("prologue").style.display="none";
aquarium();
return player;

function getBanana(){
	this.score = +1;
	getScore =>{return this.score}
}
}

function hideAll() {
document.getElementById("prologue").style.display="none";
}


function aquarium() {
var htmlOutput = "<h1>Welcome to the aquarium!</h1>";
htmlOutput += "<p>Here is where our story will go.</p>";
htmlOutput += '<button onclick="aquariumEducation()" type="button">Move on to learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function aquariumEducation() {
var htmlOutput = "<h1> Learn more about aquariums </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING</p>";
htmlOutput += '<button onclick="safari()" type="button">Option One</button>';
htmlOutput += '<button onclick="safari()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}


function safari() {
var htmlOutput = "<h1> Welcome to the safari! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="safariEducation()" type="button">Move on to learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function safariEducation() {
var htmlOutput = "<h1> Learn more about the Safari </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING</p>";
htmlOutput += '<button onclick="jungle()" type="button">Option One</button>';
htmlOutput += '<button onclick="jungle()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}


function jungle() {
var htmlOutput = "<h1> Welcome to the jungle! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="jungleEducation()" type="button">Move on to learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function jungleEducation() {
var htmlOutput = "<h1> Learn more about the Jungle </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="pettingZoo()" type="button">Option One</button>';
htmlOutput += '<button onclick="pettingZoo()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function pettingZoo() {
var htmlOutput = "<h1> Welcome to the petting zoo! </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="pettingZooEducation()" type="button">Move on to learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function pettingZooEducation() {
var htmlOutput = "<h1> Learn more about petting zoos </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="elephantEnclosure()" type="button">Option One</button>';
htmlOutput += '<button onclick="elephantEnclosure()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function elephantEnclosure() {
var htmlOutput = "<h1> Welcome to the elephant enclosure! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="elephantEducation()" type="button">Move on to learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function elephantEducation() {
var htmlOutput = "<h1> Learn more about Elephants </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING</p>";
htmlOutput += '<button onclick="monkeyEnclosure()" type="button">Option One</button>';
htmlOutput += '<button onclick="monkeyEnclosure()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function monkeyEnclosure() {
var htmlOutput = "<h1> Welcome to the monkey enclosure! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="monkeyEducation()" type="button">Move on to Learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function monkeyEducation() {
var htmlOutput = "<h1> Learn more about Monkeys </h1>";
htmlOutput += "<p>  Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="reptileEnclosure()" type="button">Option One</button>';
htmlOutput += '<button onclick="reptileEnclosure()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function reptileEnclosure() {
var htmlOutput = "<h1> Welcome to the reptile enclosure! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="reptileEducation()" type="button">Move on to Learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function reptileEducation() {
var htmlOutput = "<h1> Learn more about Reptiles </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="lionEnclosure()" type="button">Option One</button>';
htmlOutput += '<button onclick="lionEnclosure()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function lionEnclosure() {
var htmlOutput = "<h1> Welcome to the lion enclosure! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="lionEducation()" type="button">Move on to Learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function lionEducation() {
var htmlOutput = "<h1> Learn more about Lions </h1>";
htmlOutput += "<p>  Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="beekeepersHouse()" type="button">Option One</button>';
htmlOutput += '<button onclick="beekeepersHouse()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function beekeepersHouse() {
var htmlOutput = "<h1> Welcome to the beekeeper's house! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="beekeepersEducation()" type="button">Move on to Learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function beekeepersEducation() {
var htmlOutput = "<h1> Learn more about Beekeepers </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="birdEnclosure()" type="button">Option One</button>';
htmlOutput += '<button onclick="birdEnclosure()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function birdEnclosure() {
var htmlOutput = "<h1> Welcome to the bird enclosure! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="birdEducation()" type="button">Move on to Learn more</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function birdEducation() {
var htmlOutput = "<h1> Learn more about Birds </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="zooKeepersHouse()" type="button">Option One</button>';
htmlOutput += '<button onclick="zooKeepersHouse()" type="button">Option Two</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function zooKeepersHouse() {
var htmlOutput = "<h1> YOU MADE IT TO THE ZOO KEEPER'S HOUSE! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="zooKeepersHouse()" type="button">Option One</button>';
htmlOutput += '<button onclick="zooKeepersHouse()" type="button">Option Two</button>';
htmlOutput += '<img class="image" src="img/ZooKeepersHouse.png">'
document.getElementById("storyArea").innerHTML= htmlOutput;
}

//at end of game, link one button to results= final score and final health 

//each area is a function that modifies the story area (html id) when it is called 
//can re-write HTML in JS .innerHTML will do the changes

// <button onclick= "hideAll(); showOne('aquarium');"
//                         type="button">Aquarium</button>    

