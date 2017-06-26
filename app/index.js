import "./common/css/reset.css";
import header from "./modules/header";

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("app").innerHTML=header();
	console.log('render sucess!')
})
