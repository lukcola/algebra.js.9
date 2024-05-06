console.log("Visina je: " + window.innerHeight);
console.log("Širina je: " + window.innerWidth);

console.log("Domena je: " + window.location.hostname);

var winLocation = window.location;
console.log("Window location: " + winLocation);
//window.location = "index.html";

var x = window.confirm("Confirm first to see website!");
console.log("Response = " + x);
if (x == true) {
    console.log("Korisnik odgovorio OK!");
}
else {
    console.log("Korisnik odgovorio NOK!")
}

window.setTimeout(function () { console.log("Ispis sa delay od 2 sec."); }, 3000)