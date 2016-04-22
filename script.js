// otsikko
var viive = 100;
var time = 2500;
function type(letter) {
  document.getElementById("title").innerHTML += letter;
  console.log("Kirjain ["+letter+"] kirjoitettu.");
}

function write() {
  setTimeout(function(){ type("a"); }, time);
  time += viive;
  setTimeout(function(){ type("n"); }, time);
  time += viive;
  setTimeout(function(){ type("g"); }, time);
  time += viive;
  setTimeout(function(){ type("r"); }, time);
  time += viive;
  setTimeout(function(){ type("y"); }, time);
  time += viive;
  setTimeout(function(){ type("a"); }, time);
  time += viive;
  setTimeout(function(){ type("x"); }, time);
  time += viive;
  setTimeout(function(){ type("i"); }, time);
  console.log("Aloitetaan otsikon kirjoittaminen.");
}

write();
