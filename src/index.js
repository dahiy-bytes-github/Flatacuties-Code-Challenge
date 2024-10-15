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
        characterBar.appendChild(span)
    });
}