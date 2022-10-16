document.getElementById("download").addEventListener("click", () => {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => display(data));
});
function display(data) {
    info = data["results"][0];
    data = document.createElement("div");
    data.setAttribute("id", "data");
    let picture = document.createElement("img");
    picture.src = info["picture"]["large"];
    data.appendChild(picture);
    let name = document.createElement("p");
    name.innerHTML = `Name: ${info["name"]["first"]}`;
    data.appendChild(name);
    let city = document.createElement("p")
    city.innerHTML = `City: ${info["location"]["city"]}`;
    data.appendChild(city);
    let country = document.createElement("p");
    country.innerHTML = `Country: ${info["location"]["country"]}`;
    data.appendChild(country);
    let postcode = document.createElement("p");
    postcode.innerHTML = `Postcode: ${info["location"]["postcode"]}`;
    data.appendChild(postcode);
    let email = document.createElement("p");
    email.innerHTML = `E-mail: ${info["email"]}`;
    data.appendChild(email);
    document.getElementById("results").appendChild(data);
    document.getElementById("success").innerHTML = "success!";
}