var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".random");
var body = document.getElementById("gradient");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradientRandom() {
	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	color1.value = randomColor2;
	color2.value = randomColor;
	setGradient();
}

random.addEventListener("click", setGradientRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

css.textContent = 
window.getComputedStyle(body).getPropertyValue('background');

console.log(body.style.background);