const radius = document.getElementById("radius");
const circum = document.getElementById("circum");
const inputHandler = function(e) {
    calcCircumfrence(e);
};

radius.addEventListener("input", inputHandler);

function calcCircumfrence(e) {
    circum.innerHTML = "The circumference is " + e.target.value * 2 * 3.14;
}