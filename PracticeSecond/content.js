console.log("Chrome extension ready to go");

let elements = document.getElementsByTagName('p');

for (elt of elements) {
	elt.style.backgroundColor = "red";
};