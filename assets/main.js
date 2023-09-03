
//Ricavo l'elemento button
const btn = document.getElementById('btn')
//aggiungo la funziona sul click del bottone
btn.addEventListener("click", generateGrid);

function generateGrid() {
    //Ricavo il container dove andranno le mie celle
    const container = document.getElementById('container')
    //Ciclo per 100 celle
    for (let i = 0; i < 100; i++) {
        //Creo l'elemento
        const cellElement = document.createElement('div')
        //aggiungo la classe cell
        cellElement.className = 'cell';
        //Appendo l'elemento al mio container
        container.append(cellElement)

        //Aggiungo una funzione al click della cella
        cellElement.addEventListener('click', function () {
            //Mostro in console il numero cliccato
            console.log('ho cliccato sulla cella numero:', i + 1);
            //Cambio il background della cella
            this.style.background = 'aqua'
        })
    }
}