function getRandomColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}
function changeColourById() {
    document.getElementById("first_clic").style.background = getRandomColor();
    document.getElementById("first_clic").style.color = getRandomColor();
}
function changeColourQuerySelector() {
    document.querySelector(".second_clic").style.background = getRandomColor();
    document.querySelector(".second_clic").style.color = getRandomColor();
}
function add() {
    document.getElementById("picture").src = "https://i.pinimg.com/736x/fd/ea/ca/fdeaca1b9bcea741d4c409c14e113732.jpg"
    document.getElementById("picture").style.display = "inline"
}
function increase() {
    document.getElementById("picture").style.width = (document.getElementById("picture").offsetWidth + 5) + "px"
}
function reduce() {
    document.getElementById("picture").style.width = (document.getElementById("picture").offsetWidth - 5) + "px"
}
function remove() {
    document.getElementById("picture").style.display = "none"
}