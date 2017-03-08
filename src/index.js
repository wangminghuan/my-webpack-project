require('./static/css/index.css');

let mod=require('./static/js/mod.js');
document.getElementById("example").innerHTML=mod.text;

var f= v=> v+10;
console.log(f(10))

