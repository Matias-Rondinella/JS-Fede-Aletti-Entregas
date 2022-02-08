
let carritoDeCompras = []

const contenedorTurnos = document.getElementById('contenedor-turnos');
const turnosCarrito = document.getElementById('carrito-turnos');

const contadorTurnos = document.getElementById('contadorTurnos');
const precioTotal = document.getElementById('precioTotal');

const selecTurnos = document.getElementById('selecTurnos')
const buscador = document.getElementById('search')



//filtro
selecTurnos.addEventListener('change',()=>{
    console.log(selecTurnos.value)
    if(selecTurnos.value == 'Todos'){
        mostrarTurnos(turnoStock)
    }else{
        mostrarTurnos(turnoStock.filter(el => el.dia == selecTurnos.value))
        console.log(turnoStock.filter(el => el.dia == selecTurnos.value))
    }
})

//Buscador
buscador.addEventListener('input', ()=>{
    if (buscador.value == "") {
        mostrarTurnos(turnoStock)
    }else{
        mostrarTurnos(turnoStock.filter(el => el.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
    }
})


//logica Ecommerce

mostrarTurnos(turnoStock)

function mostrarTurnos(array){
   contenedorTurnos.innerHTML ='';
    for (const turno of array) {
        let div = document.createElement('div');
        div.className = 'turno';
        div.innerHTML += `<div class="card">
                            <div class="card-image">
                                <img src=${turno.img}>
                                <span class="card-title">${turno.nombre}</span>
                                <a id="botonAgregar${turno.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                            </div>
                            <div class="card-content">
                                <p>${turno.desc}</p>
                                <p>Talle: ${turno.talle}</p>
                                <p> $${turno.precio}</p>
                            </div>
                        </div> `
                        
        contenedorTurnos.appendChild(div);
        
        
        let btnAgregar = document.getElementById(`botonAgregar${turno.id}`)
        // console.log(btnAgregar)
    
        btnAgregar.addEventListener('click',()=>{

            agregarAlCarrito(turno.id)
        })
    }
    
}


function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(item => item.id == id)
    if(repetido){
        console.log(repetido);
        repetido.cantidad = repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id= cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{

<<<<<<< HEAD
        let productoAgregar = turnoStock.find(elemento => elemento.id == id)
        // console.log(productoAgregar)
        carritoDeCompras.push(productoAgregar)
        actualizarCarrito()
        let div = document.createElement('div')
        div.className = 'productoEnCarrito'
        div.innerHTML =`
                        <p>${productoAgregar.nombre}</p>
                        <p>Precio: $${productoAgregar.precio}</p>
                        <p id= cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
                        <button id=botonEliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorTurnos.appendChild(div)
    
        let btnEliminar = document.getElementById(`botonEliminar${productoAgregar.id}`)
        btnEliminar.addEventListener('click',()=>{
            console.log(productoAgregar.id);
            btnEliminar.parentElement.remove()                         
            carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        })
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}   


=======
// let btnLog = document.getElementById("ingresar");
//     btnLog.addEventListener("click", crearUsuario) 
//     function crearUsuario(e) {
//         e.preventDefault()
//         let usuario = document.getElementById("emailLog").value;
//         let pass = document.getElementById("passLog").value;
//         let userAndPass = document.getElementById ("userAndPass")
//         userAndPass.innerHTML = 
//         "<h2> Su Email y Constraseña son : </h2><br><h3> Email: </h3>" 
//         + `${usuario}` 
//         + "<br>" 
//         + "<h3> Contraseña: </h3>" 
//         + `${pass}`
//     }

//SELECTORES DE ID // DOM
const contenedorTurnos = document.getElementById("contenedorTurnos");
const selectTurnos = document.getElementById("selectTurnos");

selectTurnos.addEventListener("change",()=>{
    console.log(selectTurnos.value)
    if (selectTurnos.value == "Todos"){
        mostrarTurnos(turnos)
        
    }else{
        mostrarTurnos(turnos.filter(el=> el.area == selectTurnos.value))
    }
})
>>>>>>> 8ef001a1da9aad192d6671131df19eb4f8c8f1fb


function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}


function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(recuperarLS);
    if(recuperarLS){
        recuperarLS.forEach(element => {
            agregarAlCarrito(element.id)
        });
    }
}

recuperar()

