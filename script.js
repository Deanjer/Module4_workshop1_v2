// title
const title = document.getElementById("title")
var titletop = "Workshop 1";
title.style.cssText += " color: black; font-size: 150px; font-weight: bold; text-align: center ; font-family: 'Roboto', sans-serif;";
title.innerHTML += titletop;

// title-container is voor alles responsive temaken dus ook de title
const title_container = document.getElementById("title_container")
title_container.style.cssText += "width: 90% " ; 

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  alert('Media Query Matched!')
}

// container
const container = document.getElementById("container");
container.style.cssText += " width: 65%; margin: 0 auto; height: auto; background-color: black; border-radius: 10px; padding: 20px";

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
volledigenaam.style.cssText += "display: block; color: white; font-size: 30px ;font-family: 'Roboto', sans-serif; margin-left: 20px;";
volledigenaam.innerHTML = "Volledige naam:"  ;
volledigenaam.innerHTML += " ";
volledigenaam.innerHTML += voornaam;
volledigenaam.innerHTML += " ";
volledigenaam.innerHTML += tussenvoegsel;
volledigenaam.innerHTML += " ";
volledigenaam.innerHTML += achternaam;


// Naam eind
// adres gegevens
const adresgegevens = document.getElementById("adresgegevens")
adresgegevens.innerHTML = "Adresgegevens: Kon. Wilhelminalaan 7, 3527 LA Utrecht";
adresgegevens.style.cssText += "display: block; color: white; font-size: 30px ;font-family: 'Roboto', sans-serif; margin-left: 20px";

// leeftijd
const leeftijd = document.getElementById("leeftijd")
leeftijd.style.cssText += "display: block; color: white; font-size: 30px ;font-family: 'Roboto', sans-serif; margin-left: 20px";
var geboortedag = "8";
var geboortemaand = "maart";
var geboortejaar =  "2006";

leeftijd.innerHTML += "Geboortedatum:";
leeftijd.innerHTML += " ";
leeftijd.innerHTML += geboortedag;
leeftijd.innerHTML += " ";
leeftijd.innerHTML += geboortemaand;
leeftijd.innerHTML += " ";
leeftijd.innerHTML += geboortejaar;

// huidig_jaartal
const huidig_jaartal = document.getElementById("huidig_jaartal")
huidig_jaartal.style.cssText += "display: block; color: white; font-size: 30px ;font-family: 'Roboto', sans-serif; margin-left: 20px";
// huidig_jaartal.innerHTML += new date()
const jaar = new Date();
let year = jaar.getFullYear();
huidig_jaartal.innerHTML += "Huidig jaar:"
huidig_jaartal.innerHTML += " ";
document.getElementById("huidig_jaartal").innerHTML += year;

// aantal broodjes
const broodjes = document.getElementById("broodjes")
broodjes.innerHTML += "Aantal broodjes:";
broodjes.innerHTML += " ";
broodjes.innerHTML += "18";
broodjes.style.cssText += "display: block; color: white; font-size: 30px ;font-family: 'Roboto', sans-serif; margin-left: 20px";

// lunch kosten
const lunch_kosten = document.getElementById("lunch_kosten")
lunch_kosten.style.cssText += "display: block; color: white; font-size: 30px ;font-family: 'Roboto', sans-serif; margin-left: 20px";
var prijs = 2.23;
var aantal_broodjes = 18.0;
lunch_kosten.innerHTML +=  "Lunch kosten:" ;
lunch_kosten.innerHTML += " ";
lunch_kosten.innerHTML += prijs * aantal_broodjes;
// test
// const adresgegevens = document.getElementById("adresgegevens");
// adresgegevens.style.background = 'yellow'
// adresgegevens.style.cssText += "display: block; color: blue";
// adresgegevens.innerHTML = "joeheoe"
// adresgegevens.innerHTML += "<br>jaaf"