// title
const title = document.getElementById("title")
var titletop = "test";
title.style.cssText += " color: black; font-size: 150px; font-weight: bold; text-align: center;";
title.innerHTML += titletop;





// container
const container = document.getElementById("container");
container.style.cssText += " width: 50%; margin: 0 auto; height: auto; background-color: #DBDBDB; text-align: center ";



// Naam begin
// var volledigenaam = voornaam + tussenvoegsel + achternaam;
var voornaam = "Dean";
var tussenvoegsel = "Jeremy";
var achternaam = "Blok";

const volledigenaam = document.getElementById("volledigenaam");
// volledigenaam.style.background = '#DBDBDB'
volledigenaam.style.cssText += "display: block; color: #529EA7; ";
volledigenaam.innerHTML = voornaam;
volledigenaam.innerHTML += " ";
volledigenaam.innerHTML += tussenvoegsel;
volledigenaam.innerHTML += " ";
volledigenaam.innerHTML += achternaam;


// Naam eind













// test
// const adresgegevens = document.getElementById("adresgegevens");
// adresgegevens.style.background = 'yellow'
// adresgegevens.style.cssText += "display: block; color: blue";
// adresgegevens.innerHTML = "joeheoe"
// adresgegevens.innerHTML += "<br>jaaf"