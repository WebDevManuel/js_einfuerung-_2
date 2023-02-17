////////////////////////////////////////////////////
// lev1_1: document.write() ///////////////////////
//////////////////////////////////////////////////
document.write('<h1>Hello World!</h1>');
document.write('<p>Have a nice day!</p>');
let myText = "Hello again";
document.write(myText);
const vorname = "Bob";
const nachname = "Marley";
document.write('<p>' + vorname + '</p>');
document.write('<p>' + nachname + '</p>');
console.log();

////////////////////////////////////////////////////
// lev1_2:  innerHTML /////////////////////////////
//////////////////////////////////////////////////
const info = document.getElementById("info");
info.innerHTML = '<h1>' + "Hello World_info" + '</h1>';
info.innerHTML += '<h2>' + "How are you?" + '</h2>';

const container = document.getElementById("container");
container.innerHTML = '<p>' + "start of the element" + '</p>';
document.write("end of the element");

////////////////////////////////////////////////////
// lev1_3:  innerHTML /////////////////////////////
//////////////////////////////////////////////////
const gallery = document.getElementById("gallery");
gallery.innerHTML = '<figure>' +
    '<img src="http://unsplash.it/200/200?1" alt="figure">' +
    '<figcaption>' + "Fig.1" + '</figcaption>' +
    '</figure>';
gallery.innerHTML += '<figure>' +
    '<img src="http://unsplash.it/200/200?2" alt="figure">' +
    '<figcaption>' + "Fig.2" + '</figcaption>' +
    '</figure>';
gallery.innerHTML += '<figure>' +
    '<img src="http://unsplash.it/200/200?3" alt="figure">' +
    '<figcaption>' + "Fig.3" + '</figcaption>' +
    '</figure>';

////////////////////////////////////////////////////
// lev1_11: String Methods ////////////////////////
//////////////////////////////////////////////////
let x = "Hello";
let y = "World<br>";
let z = x + y;
document.write(z);
let n = x + " " + y;
document.write(n);
x += x + " World";
document.write(x);
let meinString = "Ich bin Erster";
meinString += "...ich komme auf Platz zwei";
console.log(meinString);