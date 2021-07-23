
let correos = ["diana@gmail.com", "seas@gmail.com", "lupita@gmail.com", "juan@gmail.com"]

console.log(correos.length);

let ganador = document.getElementById('botoncito');
ganador.addEventListener('click', function () {
    console.log('holi');
    var resp = correos[Math.floor(Math.random()*correos.length)];
    console.log(resp);
    
});