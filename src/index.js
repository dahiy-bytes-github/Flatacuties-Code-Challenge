document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/characters")
        .then(response => response.json())//convert the response to JSON
        .then(data => displayCharacterNames(data))//call a function to display the data/character names
        .catch(error => console.log("Can't fetch data", error));//handle errors
})


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
function displayCharacterDetails(character){
    const name  = document.getElementById("name")
    const image  = document.getElementById("image")
    const vote  = document.getElementById("vote-count")
    name.textContent = character.name
    image.src = character.image
    vote.textContent = character.votes

    const votesForm = document.getElementById("votes-form")
    const resetBtn = document.getElementById("reset-btn")

    votesForm.onsubmit =null
    votesForm.onsubmit = (event) =>{
        event.preventDefault()
        const votesInput = document.getElementById("votes").value.trim()
        if(votesInput){
            const newVotes = parseInt(votesInput)
            if(!isNaN(newVotes)){
            character.votes += newVotes
            vote.textContent = character.votes
            }
        }
        
        votesForm.reset()
    } 
   
    resetBtn.addEventListener("click",()=> {
        character.votes = 0;
        vote.textContent = character.votes
    })
}