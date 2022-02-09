
let carritoTurnos = []

const contenedorTurnos = document.getElementById('contenedor-turnos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const selecTurnos = document.getElementById("selecTurnos")

const btnConfirmar = document.getElementById("boton-confirmar")


//filtro por dia
selecTurnos.addEventListener('change',()=>{
    console.log(selecTurnos.value)
    if(selecTurnos.value == 'Todos'){
        mostrarTurnos(turnoStock)
    }else{
        mostrarTurnos(turnoStock.filter(el => el.dia == selecTurnos.value))
        console.log(turnoStock.filter(el => el.dia == selecTurnos.value))
    }
})


//logica

mostrarTurnos(turnoStock)

function mostrarTurnos(array){
    contenedorTurnos.innerHTML ='';
    for (const turno of array) {
        let div = document.createElement('div');
        div.className = 'turno';
        div.innerHTML += `<div class="card">
                            <div class="card-image">
                                <img src=${turno.img}>
                                <span class="card-title">${turno.area}</span>
                                <a id="botonAgregar${turno.id}" class="btn-floating halfway-fab waves-effect waves-light red"><img src="assets/imgs/carritoTurnos.svg" alt=""></a>
                            </div>
                            <div class="card-content">
                                <p>${turno.dia}</p>
                                <p>${turno.horario}</p>
                            </div>
                        </div> `
                        
        contenedorTurnos.appendChild(div);
        let botonAgregar = document.getElementById(`botonAgregar${turno.id}`)
        botonAgregar.addEventListener("click",()=> {
            agregarTurno(turno.id)
        })
    }
    
}
//Seleccionar un turno por ID y alojarlo en nuestro carrito: "carritoTurnos[]" Linea 1
function agregarTurno(id) {
    let turnoSeleccionado = turnoStock.find(el => el.id == id)
    carritoTurnos.push(turnoSeleccionado)
    actualizarTurnos()
    let div = document.createElement("div")
    div.className = "modal-content"
    div.innerHTML += `
                    <h5>${turnoSeleccionado.area}</h5>
                    <p>${turnoSeleccionado.dia}</p>
                    <P>${turnoSeleccionado.horario}</P>
                    <button id=botonEliminar${turnoSeleccionado.id}>
                        <img src="assets/imgs/carritoTurnos.svg" alt="eliminar">
                    </button>
                    
                    
    
    `
    contenedorCarrito.appendChild(div);
    let botonEliminar = document.getElementById(`botonEliminar${turnoSeleccionado.id}`)
    botonEliminar.addEventListener("click",()=>{
        console.log(turnoSeleccionado.id); 
        carritoTurnos = carritoTurnos.filter(el => el.id != turnoSeleccionado.id)
        actualizarTurnos()
    })
}

function  actualizarTurnos (){
    contadorCarrito.innerText = carritoTurnos.reduce((acc,el)=> acc + el.cantidad, 0)
    
}

btnConfirmar.addEventListener("click", ()=> {
    console.log("Turnos reservados");
    let div = document.createElement("div")
    div.className = "btnConfirmar"
    div.innerHTML += `
                    <h5>Reserva exitosa</h5> 
                    <button id=botonFinalizar>
                        salir
                    </button>          
    
    `
    btnConfirmar.append(div);
    let botonFinalizar = //aca deberia decirle que reinicie todo
    
})