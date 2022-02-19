let carritoTurnos = []

const contenedorTurnos = document.getElementById('contenedor-turnos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const selecTurnos = document.getElementById("selecTurnos")

const buscador = document.getElementById("buscador")

//BUSCADOR
buscador.addEventListener("input", ()=>{
    if (buscador.value == "") {
        mostrarTurnos(turnoStock)
        
    }else{
        let arrayFiltrado = turnoStock.filter(el => el.area.toLowerCase().includes(buscador.value.toLowerCase()))
        
        mostrarTurnos(arrayFiltrado)
        // arrayFiltrado.forEach(elemento => {
        //     if(carritoTurnos.find(reserva=> reserva.id == elemento.id)){
        //         if(carritoTurnos.find(turno => turno.area == elemento.area)){
        //             validar(elemento, 'block', 'none')
        //         }
        //     }
        // })
        // if(carritoTurnos.find(reserva=> reserva.id == elemento.id)){
        //     if(carritoTurnos.find(turno => turno.area == elemento.area)){
        //         validar(elemento, 'block', 'none')
        //     }
        // }

    }
})

//filtro por dia
selecTurnos.addEventListener('change',()=>{
    console.log(selecTurnos.value)
    if(selecTurnos.value == 'Todos'){
        mostrarTurnos(turnoStock)
    }else{
        mostrarTurnos(turnoStock.filter(el => el.dia == selecTurnos.value))
        console.log(turnoStock.filter(el => el.dia == selecTurnos.value))
        actualizarTurnos ()
    }
})

//logica

mostrarTurnos(turnoStock)

function mostrarTurnos(array){
    contenedorTurnos.innerHTML ='';
    for (const turno of array) {
        
        let div = document.createElement('div');
        div.className = 'turno';
        div.innerHTML += `<div class="card col-lg-4">
                            <div class="card-image">
                                <img src=${turno.img} class= "rounded-circle">
                                <span class="card-title">${turno.area}</span>                                
                            </div>
                            <div class="card-content">
                                <p>${turno.dia}</p>
                                <p>${turno.horario}</p>
                                <a id="botonAgregar${turno.id}" class="btn-floating halfway-fab waves-effect waves-light red boton${turno.area}"><img src="assets/imgs/carritoTurnos.svg" alt=""></a>
                                <p id="parrafo${turno.id}" style='display:none; color:red'>ELEGIDA</p>
                            </div>
                        </div> `
                        
        contenedorTurnos.appendChild(div);
        // if(carritoTurnos.find(reserva=> reserva.id == turno.id)){

            if(carritoTurnos.find(element => element.area == turno.area)){
                
                if(carritoTurnos.find(reserva=> reserva.id == turno.id)){
                    validar(turno, 'block', 'none')
                   
                }
            }
        
        
        let botonAgregar = document.getElementById(`botonAgregar${turno.id}`)
        botonAgregar.addEventListener("click",()=> {
            agregarTurno(turno.id, turno.area)
            
            validar(turno, 'block', 'none')
            
            
        })
    }
    
}

function validar(turno,si , no){
    console.log(turno);
    let ocultar = document.getElementsByClassName(`boton${turno.area}`)
    
    let parrafo = document.getElementById(`parrafo${turno.id}`)
    for (const btn of ocultar) {
        console.log(btn);
        btn.style.display = no;
    }

    parrafo.style.display = si;
}


//Seleccionar un turno por ID y alojarlo en nuestro carrito: "carritoTurnos[]" Linea 1
function agregarTurno(id) {
    let turnoSeleccionado = turnoStock.find(el => el.id == id)
    carritoTurnos.push(turnoSeleccionado)
    actualizarTurnos()
    mostrarReserva(turnoSeleccionado)


localStorage.setItem('carrito', JSON.stringify(carritoTurnos))

}


function mostrarReserva(turnoSeleccionado) {
    let div = document.createElement("div")
    div.className = "lista-turnos"
    div.innerHTML += `
                    <h5>${turnoSeleccionado.area}</h5>
                    <p>${turnoSeleccionado.dia}</p>
                    <P>${turnoSeleccionado.horario}</P>
                    <button id=botonEliminar${turnoSeleccionado.id}>
                        <img src="../assets/imgs/eliminarTurnos.svg" alt="eliminar">
                    </button>
                    `
    contenedorCarrito.appendChild(div);
    let botonEliminar = document.getElementById(`botonEliminar${turnoSeleccionado.id}`)
    botonEliminar.addEventListener("click",()=>{
        console.log(turnoSeleccionado.id);
        botonEliminar.parentElement.remove() 
        carritoTurnos = carritoTurnos.filter(el => el.id != turnoSeleccionado.id)
        actualizarTurnos()
        localStorage.setItem('carrito', JSON.stringify(carritoTurnos))
        validar(turnoSeleccionado, 'none', 'block')
    })
}

function  actualizarTurnos (){
    contadorCarrito.innerText = carritoTurnos.reduce((acc,el)=> acc + el.cantidad, 0)    
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    
    if(recuperarLS){
        recuperarLS.forEach(element => {
            mostrarReserva(element)
            carritoTurnos.push(element)
            actualizarTurnos()
            validar(element, 'block', 'none')
            
        });
    }

    let user = JSON.parse(localStorage.getItem('dato'))
    if(user){
        let userIndex = document.getElementById('user')
        userIndex.innerText= `${user[0].usuario}`
    }

    user.forEach(elemento=>{
        console.log(elemento)
        elemento.email = 'ejemplo@ejemplo.com'
        elemento.turno = carritoTurnos
    })
  
}

recuperar()

