let buttonsQuantity;
let winnerButton;

function displayButtons() {
    for (let i = 1; i <= buttonsQuantity; ++i) {
        document.getElementById('input-buttons').innerHTML += `<button type="button" class="btn btn-primary" id=${i} onclick="checkWinner(this.id)">Button${i}</button>`;
    }       
}

function save() {
    buttonsQuantity = document.getElementById('numberOfButtons').value;
    winnerButton = Math.floor(Math.random() * buttonsQuantity) + 1;
    document.getElementById('card-header').innerHTML = `
        <div class="card-header" style="width: 550px">Please choose a button</div>
        <br>
        <div class="button-style" id="input-buttons">
        </div>
        <br>
    `;
    displayButtons();
}

function checkWinner(clickedId) {
    if (clickedId == winnerButton) {
        alert('Congratulations! You won!');
    } else {
        alert('You lost! Keep trying!');
    }
}

function restart() {
    location.reload();
}