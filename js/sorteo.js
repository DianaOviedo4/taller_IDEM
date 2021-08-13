
var correos = ["diana@gmail.com", "seas@gmail.com", "lupita@gmail.com", "juan@gmail.com",
                "pablo@gmail.com", "luisa@gmail.com","keren@gmail.com","omar@gmail.com","pepe@gmail.com",]

                // una matriz, es una dimension.
                // arreglo o matriz multidimensional : arreglos dentro de otros.
                // ejemplo de multidimentsional: 
                // var elements = [ ['e', 'b', 'c'], ['a', 'b', 'c'] ];
console.log(correos.length);
console.log(correos[1]);

let ganador = document.getElementById('botoncito');
ganador.addEventListener('submit', getWinner());


function getWinner() {
    console.log('toy dentro');
    var resp = correos[Math.floor(Math.random() * correos.length)];
    console.log(resp);

    let view = document.getElementById('resultado');
    view.innerText = resp;

};

let p = setInterval('getWinner()', 200);
setTimeout(() => {
    clearInterval(p); console.log('FINAAAAL');
}, 5000);


// let : variable local 
// var : variables globales
// '' : extrictamente para cadenas de texto.