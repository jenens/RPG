function Character() {
	this.health = health;
	this.bananas = bananas;
}

Burglar.prototype = new Character();
Punk.prototype = new Character();
Janitor.prototype = new Character();

function Burglar(color){
	this.mask = color;
}

function Punk(color){
	this.hair = color;
}

function Janitor(color){
	this.mop = color;
}

function affectScore(affect,number, cause){
	if(affect === 'gained'){
		this.bananas += number;
	}else if(affect === "lost"){
		this.bananas -= number;
	}
	console.log('You ' + affect + ' ' + number + " bananas from the " + cause + '. You have ' + this.bananas + " total bananas.");
}

function chooseCharacter(type){
var player;
if (type==="burglar") {
	player=new Burglar();
}

else if (type==="janitor"){
	player=new Janitor();
}

else if (type==="punk") {
	player=new Punk();
}

document.getElementById("prologue").style.display="none";
aquarium(player);
return player;

function getBanana(){
	this.score = +1;
	getScore =>{return this.score}
	}
}

function hideAll() {
document.getElementById("prologue").style.display="none";
}


function aquarium(player) {
	var argShark = ['lost',3,'sharks'];
	var argPenguin = ['gained',3,'penguins']
var htmlOutput = "<h1>Welcome to the Aquarium!</h1>";
htmlOutput += "<p> Swim through the shark tank or take a ride on a penguin to get to the next enclosure! .</p>";
htmlOutput += '<button class="button" onclick="aquariumEducation()" type="button">Shark Tank</button>';
htmlOutput += '<button class="button" onclick="aquariumEducation()" id="btnSpace" type="button">Ride a Penguin</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function aquariumEducation(player, arg) {
// affectScore.apply(player,arg);
// console.log(player.bananas);
var htmlOutput = "<h1> Learn more about Aquariums </h1>";
htmlOutput += "<p> <h3>SHARK FACT</h3> Did you know...most shark species will drown if they stop moving? <h3> PENGUIN FACT </h3> Did you know...that, while penguins do have wings, they are flightless birds? </p>";
htmlOutput += '<button class="button" onclick="safari()" type="button"> Next </button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}


function safari(player) {
var htmlOutput = "<h1> Welcome to the Safari! </h1>";
htmlOutput += "<p> You made it! Now that you're in the safari, you can get to the next location faster by fighting the lions OR choose to help the giraffe out of a hole for extra bananas! </p>";
htmlOutput += '<button class="button" onclick="safariEducation()" type="button">Fight Lions</button>';
htmlOutput += '<button class="button" onclick="safariEducation()" id="btnSpace" type="button">Help Giraffe</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function safariEducation() {
var htmlOutput = "<h1> Learn more about the Safari </h1>";
htmlOutput += "<p> <h3> LION FACT </h3> Did you know...that, unlike other cats, lions are very social animals? They live in a pride consisting of up to 30 lions! <h3> GIRAFFE FACT </h3> Did you know...that the giraffe is the tallest mammal in the world? </p>";
htmlOutput += '<button class="button" onclick="jungle()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}


function jungle() {
var htmlOutput = "<h1> Welcome to the Jungle! </h1>";
htmlOutput += "<p> You made it! You can choose to climb the banana tree to get to the next enclosure OR swim to the next enclosure through the lagoon!</p>";
htmlOutput += '<button class="button" onclick="jungleEducation()" type="button">Climb Tree</button>';
htmlOutput += '<button class="button" onclick="jungleEducation()" id="btnSpace" type="button">Swim Lagoon</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function jungleEducation() {
var htmlOutput = "<h1> Learn more about the Jungle </h1>";
htmlOutput += "<p> <h3>JUNGLE FACTS</h3> Did you know...that all of the ants in the jungle combined weigh four timesm ore than all jungle mammals?</p>";
htmlOutput += '<button class="button" onclick="pettingZoo()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function pettingZoo() {
var htmlOutput = "<h1> Welcome to the Petting Zoo! </h1>";
htmlOutput += "<p> You made it! You can either go on a pony ride to get to the next enclosure or feed some goats who may know a shortcut. </p>";
htmlOutput += '<button class="button" onclick="pettingZooEducation()" type="button">Pony Ride</button>';
htmlOutput += '<button class="button" onclick="pettingZooEducation()" id="btnSpace" type="button">Feed Goats</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function pettingZooEducation() {
var htmlOutput = "<h1> Learn more about Petting Zoos </h1>";
htmlOutput += "<p><h3>PONY FACTS</h3> Did you know...that ponies, while smaller than horses, are used in many working roles? <h3>GOAT FACTS</h3> Did you know...that goats were one of the first animals to be tamed by humans, and have been herded for 9,000 years? </p>";
htmlOutput += '<button class="button" onclick="elephantEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function elephantEnclosure() {
var htmlOutput = "<h1> Welcome to the Elephant Enclosure! </h1>";
htmlOutput += "<p> You made it! Ride the elephants to get to the next enclosure quickly or walk through the enclosure to possibly find some bananas. </p>";
htmlOutput += '<button class="button" onclick="elephantEducation()" type="button">Ride Elephants</button>';
htmlOutput += '<button class="button" onclick="elephantEducation()" id="btnSpace" type="button">Walk</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function elephantEducation() {
var htmlOutput = "<h1> Learn more about Elephants </h1>";
htmlOutput += "<p><h3>ELEPHANT FACTS</h3> Did you know...that elephants are the largest land animals in the world? The largest elephant on record was 24,000 pounds and 13 feet tall at his shoulder!</p>";
htmlOutput += '<button class="button" onclick="monkeyEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function monkeyEnclosure() {
var htmlOutput = "<h1> Welcome to the Monkey Enclosure! </h1>";
htmlOutput += "<p> You made it! Try to steal the monkey's bananas for extra points or choose to bring a crafty monkey with lock picking skills with you. </p>";
htmlOutput += '<button class="button" onclick="monkeyEducation()" type="button">Get Bananas</button>';
htmlOutput += '<button class="button" onclick="monkeyEducation()" id="btnSpace" type="button">Bring Monkey</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function monkeyEducation() {
var htmlOutput = "<h1> Learn more about Monkeys </h1>";
htmlOutput += "<p><h3>MONKEY FACTS</h3>Did you know...that monkeys peel bananas before eating them? </p>";
htmlOutput += '<button class="button" onclick="reptileEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function reptileEnclosure() {
var htmlOutput = "<h1> Welcome to the Reptile Enclosure! </h1>";
htmlOutput += "<p> You made it! Throw some bananas at the gila monster to keep him from eating you OR jump across the crocodiles backs to get to the next enclosure. </p>";
htmlOutput += '<button class="button" onclick="reptileEducation()" type="button">Throw Bananas at Gila Monster</button>';
htmlOutput += '<button class="button" onclick="reptileEducation()" id="btnSpace" type="button">Run Across Crocodiles</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function reptileEducation() {
var htmlOutput = "<h1> Learn more about Reptiles </h1>";
htmlOutput += "<p><h3>GILA MONSTER FACTS</h3> Did you know...that the gila monster is one of only two venomous lizard species? They only live in southwestern United States and northwestern Mexico. <CROCODILE FACTS</h3> Did you know...that crocodiles can't sweat and release heat through the mouth? </p>";
htmlOutput += '<button class="button" onclick="lionEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function lionEnclosure() {
var htmlOutput = "<h1> Welcome to the Lion Enclosure! </h1>";
htmlOutput += "<p> You're getting closer to the zookeeper's house! Next, decide whether you want to roar at the lions to scare them away or run as fast as you can to the next enclosure.</p>";
htmlOutput += '<button class="button" onclick="lionEducation()" type="button">Roar</button>';
htmlOutput += '<button class="button" onclick="lionEducation()" id="btnSpace" type="button">Run</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function lionEducation() {
var htmlOutput = "<h1> Learn more about Lions </h1>";
htmlOutput += "<p><h3>LION FACTS</h3> Did you know...that in the pride, female's do most of the hunting? </p>";
htmlOutput += '<button class="button" onclick="beekeepersHouse()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function beekeepersHouse() {
var htmlOutput = "<h1> Welcome to the Beekeeper's House! </h1>";
htmlOutput += "<p> You made it, but try not to get stung! You can proceed by giving the bees one of your bananas to make it through the enclosure unharmed or give them some of the flowers growing outside their enclosure. </p>";
htmlOutput += '<button class="button" onclick="beekeepersEducation()" type="button">Bananas</button>';
htmlOutput += '<button class="button" onclick="beekeepersEducation()" id="btnSpace" type="button">Flowers</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function beekeepersEducation() {
var htmlOutput = "<h1> Learn more about Bees </h1>";
htmlOutput += "<p><h3>BEE FACTS</h3> Did you know...that there are three different kinds of bees; the queen, the worker, and the drone? Honey bees also fly at 15 miles per hour! </p>";
htmlOutput += '<button class="button" onclick="birdEnclosure()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function birdEnclosure() {
var htmlOutput = "<h1> Welcome to the Bird Enclosure! </h1>";
htmlOutput += "<p> You're almost there! You can either run to the other side and risk being pooped on by a seagull or help an injured bird that may repay you're kindness in bananas. </p>";
htmlOutput += '<button class="button" onclick="birdEducation()" type="button">Run</button>';
htmlOutput += '<button class="button" onclick="birdEducation()" id="btnSpace" type="button">Help</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function birdEducation() {
var htmlOutput = "<h1> Learn more about Birds </h1>";
htmlOutput += "<p><h3>BIRD FACTS</h3> Did you know...that there are close to 10,000 different species of birds worldwide? The largest of all the species is the ostrich. </p>";
htmlOutput += '<button class="button" onclick="zooKeepersHouse()" type="button">Next</button>';
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function zooKeepersHouse() {
var htmlOutput = "<h1> YOU MADE IT TO THE ZOO KEEPER'S HOUSE! </h1>";
htmlOutput += "<p> Here is where our story will go. </p>";
htmlOutput += '<button class="button" onclick="scorePage()" type="button">See your score!</button>';
htmlOutput += '<img class="image" src="img/ZooKeepersHouse.png">'
document.getElementById("storyArea").innerHTML= htmlOutput;
}

function scorePage() {
var htmlOutput = "<h1> Here's your score! </h1>";
htmlOutput += "<p> Great job! Here are how many bananas you gained throughout your game! </p>";
document.getElementById("storyArea").innerHTML= htmlOutput;
}



//at end of game, link one button to results= final score and final health

//each area is a function that modifies the story area (html id) when it is called
//can re-write HTML in JS .innerHTML will do the changes

// <button onclick= "hideAll(); showOne('aquarium');"
//                         type="button">Aquarium</button>
