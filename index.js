/***** Deliverable 1 *****/
const zag = document.getElementById("header")
console.log("Here's your header:", zag.innerHTML)


/***** Deliverable 2 *****/

zag.style.color = 'red'

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
const div = document.querySelector(".player-container")

for (let i=0; i<PLAYERS.length; i++) {
div.innerHTML += `
    <div class="player" data-number="${PLAYERS[i].number}">
    <h3>
    ${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)
    </h3>
    <img src="${PLAYERS[i].photo}" alt="playerphoto">
    </div>
`
}
/***** Deliverable 4 *****/
const sterling = document.querySelector("[data-number='7']")

sterling.remove()