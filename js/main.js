
var teamData = {
				teamName: "Juventus", 
				teamLogo: "./img/juventus-logo.png", 
				teamLogoSecond: "./img/logo.png",
				headerBacgroudImage: "./img/flag.png",
				theFirstElevenPlayers:[
				{
					imageOfPlayer: "./img/Wojciech Szczesny.png",
					name: "Wojciech",
					lastName: "Szczesny",
					number: 1,
					position: "Goalkeeper",
					age: 30
				},
				{
					imageOfPlayer: "./img/Matthijs de Ligt.png",
					name: "Matthijs",
					lastName: "de Ligt",
					number: 4,
					position: "Defender",
					age: 21
				},
				{
					imageOfPlayer: "./img/Giorgio Chiellini.png",
					name: "Giorgio",
					lastName: "Chiellini", 
					number: 3, 
					position: "Defender", 
					age: 36
				},
				{
					imageOfPlayer: "./img/Alex Sandro.png",
					name: "Alex", 
					lastName: "Sandro", 
					number: 12, 
					position: "Defender", 
					age: 30
				},
				{
					imageOfPlayer: "./img/Juan Cuadrado.png",
					name: "Juan", 
					lastName: "Cuadrado", 
					number: 16, 
					position: "Defender", 
					age: 32
				},
				{
					imageOfPlayer: "./img/Weston McKennie.png",
					name: "Weston", 
					lastName: "McKennie", 
					number: 14, 
					position: "Midfield", 
					age: 22
				},
				{
					imageOfPlayer: "./img/Rodrigo Bentancur.png",
					name: "Rodrigo", 
					lastName: "Bentancur", 
					number: 30, 
					position: "Midfield", 
					age: 23
				},
				{
					imageOfPlayer: "./img/Adrien Rabiot.png",
					name: "Adrien", 
					lastName: "Rabiot", 
					number: 25, 
					position: "Midfield", 
					age: 25
				},
				{
					imageOfPlayer: "./img/Federico Chiesa.png",
					name: "Federico", 
					lastName: "Chiesa", 
					number: 22, 
					position: "Attack", 
					age: 23
				},
				{
					imageOfPlayer: "./img/Alvaro Morata.png",
					name: "Alvaro", 
					lastName: "Morata", 
					number: 9, 
					position: "Attack", 
					age: 28
				},
				{
					imageOfPlayer: "./img/Cristiano Ronaldo.png",
					name: "Cristiano Ronaldo", 
					lastName: "Santos Aveiro", 
					number: 7, 
					position: "Attack", 
					age: 36
				}
				],

				changePlayers:[
				{
					imageOfPlayer: "./img/Dejan Kulusevski.png",
					name: "Dejan", 
					lastName: "Kulusevski", 
					number: 44, 
					position: "Attack", 
					age: 20
				},
				{
					imageOfPlayer: "./img/Leonardo Bonucci.png",
					name: "Leonardo", 
					lastName: "Bonucci", 
					number: 19, 
					position: "Defender", 
					age: 33
				},
				{
					imageOfPlayer: "./img/Merih Demiral.png",
					name: "Merih", 
					lastName: "Demiral", 
					number: 28, 
					position: "Defender", 
					age: 22
				},
				{
					imageOfPlayer: "./img/Paulo Dybala.png",
					name: "Paulo", 
					lastName: "Dybala", 
					number: 10, 
					position: "Forward", 
					age: 27
				}
				]
			};


// header

document.querySelector("header").style.backgroundImage =  "url(" + teamData.headerBacgroudImage + ")";

function header() {
	var heLi = document.createElement("a");
	heLi.setAttribute("id", "linkJ");
	heLi.setAttribute("href","https://www.juventus.com/en/");
	heLi.setAttribute("target", "_blank");
	document.querySelector("header").prepend(heLi);

	var heLo = document.createElement("img");
	heLo.setAttribute("id", "logoJ");
	heLo.setAttribute("src", teamData.teamLogo);
document.getElementById("linkJ").prepend(heLo);

}


var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  document.querySelector("button").style.background = "red";
  document.querySelector("button").innerHTML = "Pause";
  

};
myAudio.onpause = function() {
  isPlaying = false;
  document.querySelector("button").style.background = "green";
  document.querySelector("button").innerText = "Play";
};
 // end header



// main 
// adding text on start on main
function addingClubName () {

	var clubName = document.createElement("p");
	clubName.setAttribute("id", "NameClub");
	var main = document.querySelector('main');

	clubName.textContent = teamData.teamName.split("").join(" ");
	main.prepend(clubName);
}

// adding text on main for substitution players
function addTextForSubstitution() {

	var subText = document.createElement("p");
	subText.setAttribute("id", "wordCh");
	var aside = document.getElementById('textForChanges');

	subText.textContent = "I cambiamenti";
	aside.prepend(subText);
}


var firstSquad = document.getElementById("mainPlayers");

function firstCrew() {
teamData.theFirstElevenPlayers.reverse();
for(var i = 0; i < teamData.theFirstElevenPlayers.length; i++){
	var card = document.createElement("article");
	card.setAttribute("class", "cardPl");
	firstSquad.prepend(card);
	// div i img
	var divImg = document.createElement("div");
	divImg.setAttribute("class", "imgPl");
	card.prepend(divImg);
	
	var img = document.createElement("img");
	img.setAttribute("class", "imgPlayer");
	divImg.prepend(img);
	img.setAttribute("src",teamData.theFirstElevenPlayers[i].imageOfPlayer);
	img.setAttribute("alt", "image_of_Player");

	// div i paragrafi
	var divData = document.createElement("div");
	divData.setAttribute("class", "dataPl");
	card.append(divData);

	var paragrafForDataPlayersName = document.createElement("p");
	paragrafForDataPlayersName.setAttribute("class", "dataPlayersName");
	paragrafForDataPlayersName.innerHTML += "<span>Nome:</span> " + teamData.theFirstElevenPlayers[i].name;

	var paragrafForDataPlayersLast = document.createElement("p");
	paragrafForDataPlayersLast.setAttribute("class", "dataPlayersLastName");
	paragrafForDataPlayersLast.innerHTML += "<span>Cognome:</span> " + teamData.theFirstElevenPlayers[i].lastName;

	var paragrafForDataPlayersNumber = document.createElement("p");
	paragrafForDataPlayersNumber.setAttribute("class", "dataPlayersNumber");
	paragrafForDataPlayersNumber.innerHTML += "<span>Numero:</span> " + teamData.theFirstElevenPlayers[i].number;
	
	var paragrafForDataPlayersPosition = document.createElement("p");
	paragrafForDataPlayersPosition.setAttribute("class", "dataPlayersPosition");
	paragrafForDataPlayersPosition.innerHTML += "<span>Posizione:</span> " + teamData.theFirstElevenPlayers[i].position;
	
	var paragrafForDataPlayersAge = document.createElement("p");
	paragrafForDataPlayersAge.setAttribute("class", "dataPlayersAge");
	paragrafForDataPlayersAge.innerHTML += "<span>Anni:</span> " + teamData.theFirstElevenPlayers[i].age;

	divData.prepend(paragrafForDataPlayersName, 
						paragrafForDataPlayersLast, 
							paragrafForDataPlayersNumber, 
								paragrafForDataPlayersPosition, 
									paragrafForDataPlayersAge);

	divImg.style.backgroundImage =  "url(" + teamData.teamLogoSecond + ")";


}
	
	
}




var secondSquad = document.getElementById("substitutions");

function secondCrew() {
for(var i = 0; i < teamData.changePlayers.length; i++){
	var card1 = document.createElement("article");
	card1.setAttribute("class", "cardPl");
	secondSquad.prepend(card1);
	// div i img
	var divImg = document.createElement("div");
	divImg.setAttribute("class", "imgPl");
	card1.prepend(divImg);
	
	var img = document.createElement("img");
	img.setAttribute("class", "imgPlayer");
	divImg.prepend(img);
	img.setAttribute("src",teamData.changePlayers[i].imageOfPlayer);
	img.setAttribute("alt", "image_of_Player");

	// div i paragrafi
	var divData = document.createElement("div");
	divData.setAttribute("class", "dataPl");
	card1.append(divData);

	var paragrafForDataPlayersName = document.createElement("p");
	paragrafForDataPlayersName.setAttribute("class", "dataPlayersName");
	paragrafForDataPlayersName.innerHTML += "<span>Nome:</span> " + teamData.changePlayers[i].name;

	var paragrafForDataPlayersLast = document.createElement("p");
	paragrafForDataPlayersLast.setAttribute("class", "dataPlayersLastName");
	paragrafForDataPlayersLast.innerHTML += "<span>Cognome:</span> " + teamData.changePlayers[i].lastName;

	var paragrafForDataPlayersNumber = document.createElement("p");
	paragrafForDataPlayersNumber.setAttribute("class", "dataPlayersNumber");
	paragrafForDataPlayersNumber.innerHTML += "<span>Numero:</span> " + teamData.changePlayers[i].number;
	
	var paragrafForDataPlayersPosition = document.createElement("p");
	paragrafForDataPlayersPosition.setAttribute("class", "dataPlayersPosition");
	paragrafForDataPlayersPosition.innerHTML += "<span>Posizione:</span> " + teamData.changePlayers[i].position;
	
	var paragrafForDataPlayersAge = document.createElement("p");
	paragrafForDataPlayersAge.setAttribute("class", "dataPlayersAge");
	paragrafForDataPlayersAge.innerHTML += "<span>Anni:</span> " + teamData.changePlayers[i].age;

	divData.prepend(paragrafForDataPlayersName, 
						paragrafForDataPlayersLast, 
							paragrafForDataPlayersNumber, 
								paragrafForDataPlayersPosition, 
									paragrafForDataPlayersAge);

	divImg.style.backgroundImage =  "url(" + teamData.teamLogoSecond + ")";


}
	
	
}


function arrow() {
	var arrow = document.createElement("img");
	arrow.setAttribute("id", "arrow");
	arrow.setAttribute("src", "./img/arrow.png");

	var pageUp = document.createElement("a");
	pageUp.setAttribute("href", "#");
	pageUp.setAttribute("id", "scrollUp");

	document.querySelector("main").appendChild(pageUp);

	document.getElementById("scrollUp").prepend(arrow);

	scrollingArrow ();
}


function scrollingArrow () {
	arrowUp = document.getElementById("scrollUp");

window.onscroll = function() {scrollArrow()};

function scrollArrow() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}
}

// end main






// footer
function footer(){
var firstF = document.createElement("p");
var secondF = document.createElement("h5");
firstF.innerHTML = "&copy; Copyright 2021,All Rights Reserved.Designed by <b>Stojanovic Marko</b>.";
secondF.innerHTML = "&#128526";
document.querySelector("footer").prepend(firstF,secondF);
}
//end



// change players
setInterval(function(){

	function izmena (starterIndex, izmenaIndex) {
	var starter = firstSquad.childNodes[starterIndex]; 
	starter.replaceWith(secondSquad.childNodes[izmenaIndex]) ;
	secondSquad.append(starter);
};
	
var counterStarter = Math.round(Math.random() * (teamData.theFirstElevenPlayers.length - 1));
if(counterStarter === 0) {
	return counterStarter;
}

var counterChange = Math.round(Math.random() * (teamData.changePlayers.length - 1));

izmena(counterStarter,counterChange);

},60000);


///////////////////
header();
addingClubName();
firstCrew();
addTextForSubstitution();
secondCrew();
arrow();
footer();

