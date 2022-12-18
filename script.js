// title
const title = document.getElementById("title")
var titletop = "Workshop 1";
title.style.cssText += " color: black; font-size: 150px; font-weight: bold; text-align: center ; font-family: 'Roboto', sans-serif;";
title.innerHTML += titletop;





// container
const container = document.getElementById("container");
container.style.cssText += " width: 50%; margin: 0 auto; height: auto; background-color: #DBDBDB;  ";

// center-container

const center_container = document.getElementById("center_container")
center_container.style.cssText += "width: 80%; margin-right: 80px ";

// Naam begin
// var volledigenaam = voornaam + tussenvoegsel + achternaam;
var voornaam = "Dean";
var tussenvoegsel = "Jeremy";
var achternaam = "Blok";

const volledigenaam = document.getElementById("volledigenaam");
// volledigenaam.style.background = '#DBDBDB'
volledigenaam.style.cssText += "display: block; color: #529EA7; font-size: 30px ;font-family: 'Roboto', sans-serif; ";
volledigenaam.innerHTML = voornaam;
volledigenaam.innerHTML += " ";
volledigenaam.innerHTML += tussenvoegsel;
volledigenaam.innerHTML += " ";
volledigenaam.innerHTML += achternaam;


// Naam eind
// adres gegevens
const adresgegevens = document.getElementById("adresgegevens")
adresgegevens.innerHTML = "Kon. Wilhelminalaan 7, 3527 LA Utrecht";
adresgegevens.style.cssText += "display: block; color: #529EA7; font-size: 30px ;font-family: 'Roboto', sans-serif;";









// test
// const adresgegevens = document.getElementById("adresgegevens");
// adresgegevens.style.background = 'yellow'
// adresgegevens.style.cssText += "display: block; color: blue";
// adresgegevens.innerHTML = "joeheoe"
// adresgegevens.innerHTML += "<br>jaaf"