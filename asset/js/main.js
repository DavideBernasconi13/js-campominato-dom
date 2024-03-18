document.getElementById('btn').addEventListener('click', function () {
    console.log('pippo');
    const level = parseInt(document.getElementById('level').value);
    console.log(level);
    newGame(level);
})


//funzione che crea la griglia, 
//!!passo il valore numberOfCell che poi richiamo con la variabile level!!

function newGame(numberOfCell) {
    const grid = document.getElementById('grid');
    console.log(grid);
    //pulisco il grid da eventuali griglie generate
    grid.innerHTML = '';
    //ciclo per il numero di celle e creo elemento
    for (let i = 0; i < numberOfCell; i++) {
        const newSquare = document.createElement('div');
        newSquare.innerText = i + 1;
        grid.appendChild(newSquare);
        newSquare.classList.add('cell');
        // condizione per aggiungere le classi CSS 
        if (numberOfCell === 81) {
            newSquare.classList.add('cell-medium');
        } else if (numberOfCell === 49) {
            newSquare.classList.add('cell-hard');
        }


        newSquare.addEventListener('click', function () {
            newSquare.classList.add('clicked');
        })
    }

    console.log("crash");
}

