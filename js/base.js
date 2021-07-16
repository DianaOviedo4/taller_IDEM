
console.log('step 1');

let itemServices = document.getElementById('item-services');
// añadimos el evento donde mostremos una alerta
itemServices.addEventListener('click', function(){
    let text = document.getElementById('titleHome');
    text.innerHTML = 'IDEM';
});

//para identificar elementos en mi html
// lo podemos hacer con ID.

// hay que tener en cuenta, si vamos a hacer algo
// para un elemento en especifico (se trabaja por id) o para varios (clases).
// si quiero traer varios elementos, o trabajar con varios, se usan las clases.

//