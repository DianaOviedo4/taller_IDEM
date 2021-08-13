

var elements = [
    ['E','F','G'],
    ['J','I','H'],
    ['K','L','M'],
    ['O','Q','N']
];


var game1 =  document.getElementById('game1');
var nodeBase = document.createElement('div'); // con este elemento vamos a add las letras del array.

nodeBase.className = 'item';
nodeBase.appendChild(document.createElement('h1')); // creamos otro elemento, tipo hijo

var posItem = 0;
//vamos a añadir info a mi elemento.
elements.forEach(function(row){
    row.forEach(function(col){
        //definimos ahora mi elemento clon.
        let clone = nodeBase.cloneNode(true); // para ponerlo cuantas veces se quiera y al clon le podamos hacer cosas.
                                            // true : para que apruebe la clonacion del elemento completo.
        clone.setAttribute('id', 'item' + posItem);
        // mi clon tiene una etiqueta de tipo h1
        clone.getElementsByTagName('h1')[0].innerHTML = col; // [0] : porque por ahora solo tenemos un h1.
        console.log(col);

        /*clone.dataset.row = row; con esto estamos guardando el elemento como tal, pero no la posicion que es la que necesitamos.
        clone.dataset.col = col;*/

        clone.dataset.posrow = elements.indexOf(row);
        clone.dataset.poscol = row.indexOf(col);
        clone.dataset.value = col; 
        game1.appendChild(clone); // para añadirlo
    });
    posItem++;
});

var items = document.getElementsByClassName('item');
var countClick = 0; // para contar la cantidad de clicks
var choose1 = ''; // para guardar el primer elemento que selecciono
var lastId = ''; //anterior id.

// vamos a recorrer cada elemento de ellos.
var sizeItems = items.length;
for(let i= 0; i < sizeItems; i++){
    //darle un evento de click a cada elemento.
    items[i].addEventListener('click', function(){
        //alert('clicccck');
        //la forma para acceder a mi elemento, para eso, usamos mi dataset. (obtener info en la vista dataset.NOMBREQUEQUIERA y se
        //puede guardar de cualquier tipo json..etc)

        alert(this.dataset.value);
        countClick++;
       
        if(countClick == 1){ // validar mis 2 clicks
            choose1 = this.dataset.value; // vamos a asignar el valor al primer elemento elegido. //this.dataset.value : es mi nuevo valor.
            lastId = this.id;
        }else if(countClick == 2){
            if(choose1 == this.dataset.value){
                alert('SON IGUALES');
            }else{
                alert('NO SON IGUALES, SIGUE INTENTANDO');
                
                document.getElementById(lastId).classList.toggle('clicked');
                
            }
            // se reinician.
            countClick = 0;
            choose1 = '';
            lastId = '';
        }

        choose1 = elements[this.dataset.posrow][this.dataset.poscol]; //accedemos a los elementos del arreglo
        this.classList.toogle('clicked'); //valida, si tiene la clase css, la quita si no, se la add.
        alert('elegiste' + choose1);
    });
}

//nodeBase.innerHTML = 'holi sebas, casate conmigooo';
//appendChild : la añade como hijo
// append: para añadirlo.

/* tarea: voltear todas las tarjetas,
 que las vuelva a ocultar cuando no son iguales
 y que se vuelva a ocultar o a poner de 0 todo el tablero 
 
 ----PODEMOS CONOCER EL ID DEL ELEMENTO ANTERIOR. (primero : ASIGNAR UN ID A CADA ELEMENTO)
 ---- para poder asignar un valor y luego poder ocultarlo. */