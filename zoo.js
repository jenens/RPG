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

function putPointsInArray(){
	var banana = 1;
	bananaHolder.push(banana);
}

var bananaHolder = [1,]
// function getPoints () {
// 	var scoreBoard = 0;
// }


function chooseCharacter(type){
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
htmlOutput += "<p> Swim through the shark tank or take a ride on a penguin to get to the next enclosure! .</p>";
htmlOutput += '<button onclick="aquariumEducation()" type="button">Shark Tank</button>';
htmlOutput += '<button onclick="putPointsInArray();aquariumEducation()" type="button">Ride a Penguin</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;

alert("You gained 1 banana!");
}

function aquariumEducation() {
var htmlOutput = "<h1> Learn more about aquariums </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! </p>";
htmlOutput += '<button onclick="safari()" type="button"> Next </button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}


function safari() {
var htmlOutput = "<h1> Welcome to the safari! </h1>";
htmlOutput += "<p> You made it! Now that you're in the safari, you can get to the next location faster by fighting the lions OR choose to help the giraffe out of a hole for extra bananas! </p>";
htmlOutput += '<button onclick="safariEducation()" type="button">Fight Lions</button>';
htmlOutput += '<button onclick="putPointsInArray();safariEducation()" type="button">Help Giraffe</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function safariEducation() {
var htmlOutput = "<h1> Learn more about the Safari </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! </p>";
htmlOutput += '<button onclick="jungle()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
random (0);
}


function jungle() {
var htmlOutput = "<h1> Welcome to the jungle! </h1>";
htmlOutput += "<p> You made it! You can choose to climb the banana tree to get to the next enclosure OR swim to the next enclosure through the lagoon!</p>";
htmlOutput += '<button onclick="jungleEducation()" type="button">Climb Tree</button>';
htmlOutput += '<button onclick="jungleEducation()" type="button">Swim Lagoon</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function jungleEducation() {
var htmlOutput = "<h1> Learn more about the Jungle </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning!  </p>";
htmlOutput += '<button onclick="pettingZoo()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function pettingZoo() {
var htmlOutput = "<h1> Welcome to the petting zoo! </h1>";
htmlOutput += "<p> You made it! You can either go on a pony ride to get to the next enclosure or feed some goats who may know a shortcut. </p>";
htmlOutput += '<button onclick="pettingZooEducation()" type="button">Pony Ride</button>';
htmlOutput += '<button onclick="pettingZooEducation()" type="button">Feed Goats</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function pettingZooEducation() {
var htmlOutput = "<h1> Learn more about petting zoos </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="elephantEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
random(3);
}

function elephantEnclosure() {
var htmlOutput = "<h1> Welcome to the elephant enclosure! </h1>";
htmlOutput += "<p> You made it! Ride the elephants to get to the next enclosure quickly or walk through the enclosure to possibly find some bananas. </p>";
htmlOutput += '<button onclick="elephantEducation()" type="button">Ride Elephants</button>';
htmlOutput += '<button onclick="elephantEducation()" type="button">Walk</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function elephantEducation() {
var htmlOutput = "<h1> Learn more about Elephants </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING</p>";
htmlOutput += '<button onclick="monkeyEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function monkeyEnclosure() {
var htmlOutput = "<h1> Welcome to the monkey enclosure! </h1>";
htmlOutput += "<p> You made it! Try to steal the monkey's bananas for extra points or choose to bring a crafty monkey with lock picking skills with you. </p>";
htmlOutput += '<button onclick="monkeyEducation()" type="button">Get Bananas</button>';
htmlOutput += '<button onclick="monkeyEducation()" type="button">Bring Monkey</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function monkeyEducation() {
var htmlOutput = "<h1> Learn more about Monkeys </h1>";
htmlOutput += "<p>  Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="reptileEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
random(4);
}

function reptileEnclosure() {
var htmlOutput = "<h1> Welcome to the reptile enclosure! </h1>";
htmlOutput += "<p> You made it! Throw some bananas at the gila monster to keep him from eating you OR jump across the crocodiles backs to get to the next enclosure. </p>";
htmlOutput += '<button onclick="reptileEducation()" type="button">Throw Bananas at Gila Monster</button>';
htmlOutput += '<button onclick="reptileEducation()" type="button">Run Across Crocodiles</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function reptileEducation() {
var htmlOutput = "<h1> Learn more about Reptiles </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="lionEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function lionEnclosure() {
var htmlOutput = "<h1> Welcome to the lion enclosure! </h1>";
htmlOutput += "<p> You're getting closer to the zookeeper's house! Next, decide whether you want to roar at the lions to scare them away or run as fast as you can to the next enclosure.</p>";
htmlOutput += '<button onclick="lionEducation()" type="button">Roar</button>';
htmlOutput += '<button onclick="lionEducation()" type="button">Run</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function lionEducation() {
var htmlOutput = "<h1> Learn more about Lions </h1>";
htmlOutput += "<p>  Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="beekeepersHouse()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function beekeepersHouse() {
var htmlOutput = "<h1> Welcome to the beekeeper's house! </h1>";
htmlOutput += "<p> You made it, but try not to get stung! You can proceed by giving the bees one of your bananas to make it through the enclosure unharmed or give them some of the flowers growing outside their enclosure.</p>;  </p>";
htmlOutput += '<button onclick="beekeepersEducation()" type="button">Bananas</button>';
htmlOutput += '<button onclick="beekeepersEducation()" type="button">Flowers</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function beekeepersEducation() {
var htmlOutput = "<h1> Learn more about Beekeepers </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="birdEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function birdEnclosure() {
var htmlOutput = "<h1> Welcome to the bird enclosure! </h1>";
htmlOutput += "<p> You're almost there! You can either run to the other side and risk being pooped on by a seagull or help an injured bird that may repay you're kindness in bananas. </p>";
htmlOutput += '<button onclick="birdEducation()" type="button">Run</button>';
htmlOutput += '<button onclick="birdEducation()" type="button">Help</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function birdEducation() {
var htmlOutput = "<h1> Learn more about Birds </h1>";
htmlOutput += "<p> Here is where our educational story will go. Thanks for learning! To move on to the lext level click Option 1 for SOMETHING and click OPTION 2 for SOMETHING </p>";
htmlOutput += '<button onclick="zooKeepersHouse()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
random(6);
}

function zooKeepersHouse() {
var htmlOutput = "<h1> YOU MADE IT TO THE ZOO KEEPER'S HOUSE! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button onclick="scorePage()" type="button">See your score!</button>';
htmlOutput += '<img class="image" src="img/ZooKeepersHouse.png">'
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function scorePage() {
var htmlOutput = "<h1> Here's your score! </h1>";
htmlOutput += "<p> Great job! Here are how many bananas you gained throughout your game! </p>";
document.getElementById("storyArea").innerHTML= htmlOutput;
document.getElementById("displayScore");
}








//at end of game, link one button to results= final score and final health 

//each area is a function that modifies the story area (html id) when it is called 
//can re-write HTML in JS .innerHTML will do the changes

// <button onclick= "hideAll(); showOne('aquarium');"
//                         type="button">Aquarium</button>    

