var h1 = document.createElement("h1");

h1.appendChild(document.createTextNode("Ovo je tekst unutar h1!"));

var dDescr = document.querySelector(".description");

dDescr.prepend(h1);

var h2 = document.createElement("h2");
h2.appendChild(document.createTextNode("Ovo je tekst unutar h2!"));

dDescr.append(h1);

var divInfo = document.createElement("div");
divInfo.classList.add("info");

dDescr.append(divInfo);