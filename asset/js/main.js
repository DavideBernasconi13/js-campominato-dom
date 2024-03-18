
document.getElementById('btn').addEventListener('click', function () {
    // determino il numero di bombe
    const level = parseInt(document.getElementById('level').value);
    //console.log(level);
    //faccio partire il gioco
    newGame(level);

})


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
            }

        })
    }

    console.log("crash");
}


// funzione fine del gioco
function endGame(isVictory) {
    if (isVictory === true) {
        alert('Hai vinto!')
    } else {
        location.reload();
    }
}
