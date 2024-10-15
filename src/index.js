fetch("http://localhost:3000/characters")
    .then(response => response.json(response))//convert the response to JSON
    .then(data => displayCharacterNames(data))//call a function to display the data/character names
    .catch(error => console.log("Can't fetch data", error));//handle errors

function displayCharacterNames(characters){
    const characterBar = document.getElementById('character-bar')
    characterBar.innerHTML = ""//clear the content of characterBar
    characters.forEach(element => {
        const span = document.createElement("span")
        span.textContent = element.name
        //span.style.cursor = "pointer"//make it appear clickable
        span.addEventListener("click", () => displayCharacterDetails(element));
        characterBar.appendChild(span)
    });
}
function displayCharacterDetails(characters){
    const name  = document.getElementById("name")
    const image  = document.getElementById("image")
    const vote  = document.getElementById("vote-count")
    name.textContent = characters.name
    image.src = characters.image
    vote.textContent = characters.votes
}