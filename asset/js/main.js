
document.getElementById('btn').addEventListener('click', function () {
    // determino il numero di bombe
    const level = parseInt(document.getElementById('level').value);
    //console.log(level);
    //faccio partire il gioco
    newGame(level);

})

let score = 0;

//funzione che crea la griglia, 
//!!passo il valore numberOfCell che poi richiamo con la variabile level!!

function newGame(numberOfCell) {
    // determino le celle casuali e randomiche dove ci saranno le bombe
    const bombsList = [];
    const totalBombs = 16;

    while (bombsList.length < totalBombs) {
        const number = Math.floor(Math.random() * numberOfCell) + 1;
        if (!bombsList.includes(number)) {
            bombsList.push(number);
        }
    }
    console.log('Le celle che contengono le bombe sono:', bombsList);
    const grid = document.getElementById('grid');
    console.log(grid);
    //pulisco il grid da eventuali griglie generate
    grid.innerHTML = '';
    //ciclo per il numero di celle e creo elemento
    for (let i = 1; i <= numberOfCell; i++) {
        const newSquare = document.createElement('div');
        newSquare.innerText = i;
        grid.appendChild(newSquare);
        newSquare.classList.add('cell');
        // condizione per aggiungere le classi CSS 
        if (numberOfCell === 81) {
            newSquare.classList.add('cell-medium');
        } else if (numberOfCell === 49) {
            newSquare.classList.add('cell-hard');
        }

        newSquare.addEventListener('click', function () {
            if (bombsList.includes(i)) {
                newSquare.classList.add('game-over');
                console.log('game over');
                endGame(false);
            }

            else {
                newSquare.classList.add('clicked');
                scoreUpdate();
            }

        })
    }
    //riporto il punteggio pari a 0
    score = 0;
}

//funzione update score
function scoreUpdate() {
    //prendo il div dall'HTML 
    let scoreCounter = document.querySelector('.scoreCounter');

    //aggiorno il numero del punteggio
    score++
    console.log(score);
    // lo inserisco nello score counter (contatore)
    /* ! padStart = funziona solo con le stringhe e permette di riempire di un numero di caratteri definito
   ! primo valore: numero di caratteri, secondo valore: carattere riempitivo */
    scoreCounter.innerText = String(score).padStart(5, 0);
}


// funzione fine del gioco
function endGame(isVictory) {
    if (isVictory === true) {
        alert('Hai vinto!');
    } else {
        let endGameScreen = document.createElement('div');
        endGameScreen.setAttribute('class', 'end');
        endGameScreen.innerHTML = "Game over";
        document.appendChild(endGameScreen);
        console.log(endGameScreen);
        // aggiorna la pagina ->location.reload();
    }
}
