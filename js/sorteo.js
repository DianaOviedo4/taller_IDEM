
let correos = ["diana@gmail.com", "seas@gmail.com", "lupita@gmail.com", "juan@gmail.com"]

console.log(correos.length);

let ganador = document.getElementById('botoncito');
ganador.addEventListener('submit', getWinner());


function getWinner() {
    console.log('toy dentro');
    var resp = correos[Math.floor(Math.random() * correos.length)]; // nos aseguramos de la longitud de la matriz
    console.log(resp);

    let view = document.getElementById('resultado');
    view.innerText = resp;

};

let p = setInterval('getWinner()', 200);
setTimeout(() => {
    clearInterval(p); console.log('FINAAAAL');
}, 5000);