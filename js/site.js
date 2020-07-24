/*
Other site scripts and a place to try things
*/

let user = 'cthc';
let domain = 'thehardwarecollective.com';
let element = document.getElementById('email');

element.innerHTML = '<a href="mailto:' + user + ' at ' + domain + '">' + user + ' at ' + domain + '</a>';

console.log("Hi 1337 haxor!")
