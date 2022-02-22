let carritoTurnos = []

const contenedorTurnos = document.getElementById('contenedor-turnos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const selecTurnos = document.getElementById("selecTurnos")

const buscador = document.getElementById("buscador")
const btnConfirmar = document.getElementById("btnConfirmar")

//BUSCADOR
buscador.addEventListener("input", ()=>{
    let arrayFiltrado = turnoStock.filter(el => el.area.toLowerCase().includes(buscador.value.toLowerCase()))
    buscador.value == "" ? mostrarTurnos(turnoStock) : mostrarTurnos(arrayFiltrado) // ===>> TERNARIO
    })

//filtro por dia
selecTurnos.addEventListener('change',()=>{
    console.log(selecTurnos.value)
    selecTurnos.value == "Todos" ? mostrarTurnos(turnoStock) : mostrarTurnos(turnoStock.filter(el => el.dia == selecTurnos.value)) // ===>> TERNARIO
        actualizarTurnos ()
    }
)

//logica

mostrarTurnos(turnoStock)

function mostrarTurnos(turnoStock){
    contenedorTurnos.innerHTML ='';
    for (const turno of turnoStock) {
        
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
                                <a id="botonAgregar${turno.id}" class="btn-floating halfway-fab waves-effect waves-light red boton${turno.area}"><img src="../assets/imgs/carritoTurnos.svg" alt=""></a>
                                <p id="parrafo${turno.id}" style='display:none; color:red'>ELEGIDA</p>
                            </div>
                        </div> `
                        
        contenedorTurnos.appendChild(div);
            
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
    let ocultar = document.getElementsByClassName(`boton${turno.area}`)
    
    let parrafo = document.getElementById(`parrafo${turno.id}`)
    for (const btn of ocultar) {
        
        btn.style.display = no;
        parrafo.style.display = si;
    }
    
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

    const {id, area, dia, horario} = turnoSeleccionado //========>> Desestructuracion de objeto

    let div = document.createElement("div")
    div.className = "lista-turnos"
    div.innerHTML += `
                    <h5>${area}</h5>
                    <p>${dia}</p>
                    <P>${horario}</P>
                    <button id=botonEliminar${id}>
                        <img src="../assets/imgs/eliminarTurnos.svg" alt="eliminar">
                    </button>
                    `
    contenedorCarrito.appendChild(div);
    let botonEliminar = document.getElementById(`botonEliminar${id}`)
    botonEliminar.addEventListener("click",()=>{
        botonEliminar.parentElement.remove() 
        carritoTurnos = carritoTurnos.filter(el => el.id != id)
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
    recuperarLS && recuperarLS.forEach(element => {  // ========================>>>>>>>>> Operador Logico AND
        mostrarReserva(element)
        carritoTurnos.push(element)
        actualizarTurnos()
        validar(element, 'block', 'none')
        
    });
    let userLs = JSON.parse(localStorage.getItem('usuario'))
    if(userLs){
        let userIndex = document.getElementById('user')
        userIndex.innerText= `${userLs[0].usuario}`
    }

    userLs?.forEach(elemento=>{
        elemento.turno = carritoTurnos
        actualizarTurnos()
    })

    
    
// BOTON PARA GUARDAR EL DETALLE DEL PEDIDO DEL USUARIO - "USUARIO + TURNOS SELECCIONADOS"

    btnConfirmar.addEventListener("click",()=> {

        localStorage.setItem("pedido", JSON.stringify(userLs))

        let pedido = JSON.parse(localStorage.getItem("carrito"))
        let user = JSON.parse(localStorage.getItem('usuario'))
        let pedidoDetalle = (user + pedido)
        
        console.log("Su reserva: " + pedidoDetalle)
        alert("Su reserva ha sido enviada: " + pedidoDetalle)
    })    
}

recuperar()

