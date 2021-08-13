
console.log('step 1');

// innerHTML : leer o asignar daticos a un div.
let itemServices = document.getElementById('item-services');
itemServices.addEventListener('click', function () {
    let text = document.getElementById('titleHome');
    text.innerHTML = 'IDEM';
});

////////////////////// FORMULARIO //////////////////////

let myForm = document.getElementById('formImc');

//var re = /^d+(.d+)?$/;
var msg0 = document.getElementById('camp0');
var msg1 = document.getElementById('camp1');
var msg2 = document.getElementById('camp2');
var msg = document.getElementById('msgError');
// obtenemos todos los inputs
const inputs = document.querySelectorAll('#formImc input');
myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let selected = document.getElementById('typeUser').value;
    
    let weight = myForm['pesoImc'].value;
    let height = myForm['alturaImc'].value;

    if(selected == ""){
        msg0.innerHTML = "Seleccione una opción";
        return false;
    }

    if (weight == "" || height == "") {
        msg.innerHTML = 'No deben quedar campos vacios';  
        return false;
    }else if(weight % 1 == 0){
        console.log('if 1');
        msg1.innerHTML = 'El número ingresado debe ser decimal';
        return false;
    }else if(height % 1 == 0){
        msg2.innerHTML = 'El número ingresado debe ser decimal';
        return false;
    }else if(weight > 200 || weight < 1){
        msg1.innerHTML = 'El valor ingresado debe ser mayor a 0 y menor a 200';
        return false;
    }else if(height > 200 || height < 1){
        msg2.innerHTML = 'El valor ingresado debe ser mayor a 0 y menor a 200';
        return false;
    }

    let imc = 0;
    imc = weight / Math.pow(height / 100, 2);
    imc = imc.toFixed(2); // Convierte un numero en una cadena, y lo aproxima. (2) -> numeros de decimales permitidos.
    let result = document.getElementById('resultIMC');
    console.log('result====', imc);

    let scale = '';

    if (selected == "0" || selected == "1") {
        console.log('es niñoo o joven ');
        if (imc < 16) {
            console.log('Bajo de peso');
            scale = 'Bajo de peso';
        } else if (imc >= 16 && imc < 22.7) {
            console.log('Normal');
            scale = 'Normal';
        } else if (imc >= 22.7 && imc < 27) {
            console.log('Sobrepeso');
            scale = 'Sobrepeso';
        } else {
            console.log('OBESO');
            scale = 'Obesidad'
        }

    } else if (selected == "2") {
        console.log('es adulto');
        if (imc < 15) {
            console.log('Bajo de peso');
            scale = 'Bajo de peso';
        } else if (imc >= 18.5 && imc < 25) {
            console.log('Normal');
            scale = 'Normal';
        } else if (imc >= 25 && imc < 30) {
            console.log('Sobrepeso');
            scale = 'Sobrepeso';
        } else {
            console.log('OBESOOO');
            scale = 'Obesidad'
        }
    }
    result.innerHTML = scale + ' (' + imc + ') '
    return false;
});


//para identificar elementos en mi html
// lo podemos hacer con ID.

// hay que tener en cuenta, si vamos a hacer algo
// para un elemento en especifico (se trabaja por id) o para varios (clases).
// si quiero traer varios elementos, o trabajar con varios, se usan las clases.*/
