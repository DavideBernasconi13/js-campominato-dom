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


// funzione per generare un numero random unico

function generateUniqueRandomNumber(min, max, blacklist) {
    console.log("crash");
    let isFound = false;
    let randomNumber;
    while (isFound === false) {
        randomNumber = Math.floor(Math.random() * max + 1);
        if (blacklist.includes(randomNumber) === false) {
            isFound = true;
        }
        console.log(randomNumber);
        return randomNumber;

    }
}

generateUniqueRandomNumber(1, 9, [1, 3, 5, 7, 8, 9]);