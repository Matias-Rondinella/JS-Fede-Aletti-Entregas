// Variables

let carritoTurnos = []
let validarCerrar = false

const contenedorTurnos = document.getElementById('contenedor-turnos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const selecTurnos = document.getElementById("selecTurnos")

const buscador = document.getElementById("buscador")
const btnConfirmar = document.getElementById("btnConfirmar")
const btnLimpiarCarrito = document.getElementById('btnLimpiarCarrito')

const cerrarSesion = document.getElementById('cerrarSesion')



//BUSCADOR
buscador.addEventListener("input", ()=>{
    let arrayFiltrado = turnoStock.filter(el => el.area.toLowerCase().includes(buscador.value.toLowerCase()))
    buscador.value == "" ? mostrarTurnos(turnoStock) : mostrarTurnos(arrayFiltrado) // ===>> TERNARIO
    })

//filtro por dia
selecTurnos.addEventListener('change',()=>{
    selecTurnos.value == "Todos" ? mostrarTurnos(turnoStock) : mostrarTurnos(turnoStock.filter(el => el.dia == selecTurnos.value)) // ===>> TERNARIO
        
    }
)

//LOGICA

function mostrarTurnos(turnoStock){
    
    contenedorTurnos.innerHTML ='';
    
    for (const turno of turnoStock) {
        
        const {id, area, dia, horario} = turno //=====>> Desestructuracion de Objeto

        let div = document.createElement('div');
        div.className = 'turno';
        div.innerHTML += `<div class="card">
                            <div class="card-image">
                                <span class="card-title">${area}</span>                                
                            </div>
                            <div class="card-content">
                                <p>${dia}</p>
                                <p>${horario}</p>
                                <a id="botonAgregar${id}" class="btn-floating halfway-fab waves-effect waves-light red boton${area}"><img src="../assets/imgs/carritoTurnos.svg" alt=""></a>
                                <p id="parrafo${id}" style='display:none; color:red'>ELEGIDA</p>
                            </div>
                        </div> `
                        
        contenedorTurnos.appendChild(div);
            
            if(carritoTurnos.find(element => element.area == area)){
                    validar(turno, 'none', 'none')
                if(carritoTurnos.find(reserva=> reserva.id == id)){
                    validar(turno, 'block', 'none')
                
                }
            }
            
        let botonAgregar = document.getElementById(`botonAgregar${id}`)
        botonAgregar.addEventListener("click",()=> {
            agregarTurno(id, area)
            
            validar(turno, 'block', 'none')
            Toastify({

                text: "Turno seleccionado",
                
                duration: 3000
                
                }).showToast();
            
            
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




function mostrarUsuario() {
    let userLs = JSON.parse(localStorage.getItem('usuario'))

    if(localStorage.getItem('validar')== 'true'){
        
        let userIndex = document.getElementById('userLocal')
        
        userIndex.innerText= ` Usuario: ${userLs[0].usuario} `

        let div = document.createElement("div")
        div.className = "btnCerrar"
        div.innerHTML += `
                        <button id= "btnCerrar">Cerrar Sesion</button>
                        `
        userLocal.appendChild(div);
        const btnCerrar = document.getElementById ('btnCerrar') 
        btnCerrar.addEventListener('click', ()=>{

            localStorage.setItem('validar', validarCerrar) 
            window.location.replace('saludInvitados.html')
        
        })
        
        
        setTimeout(() => {
            Swal.fire({
                title: ` Bienvenido/a ${userLs[0].usuario} `,
                confirmButtonText:"HOLA",
                timer: 5000,
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(https://media.giphy.com/media/hOO2m87AWvU7XRmOp2/giphy.gif)',
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.giphy.com/media/h4TtDH4T1k6CUtPXJv/giphy.gif")
                left top
                no-repeat
                
            `        
            })            
        }, 1000);
        
    }else {
        cerrarSesion.innerText = ``
        
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
        Swal.fire({
            title: '¿Seguro quieres eliminar este turno?',
            text: "No podras revertir este proceso",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'El turno ha sido eliminado.',
            'success'
            )
            botonEliminar.parentElement.remove() 
            carritoTurnos = carritoTurnos.filter(el => el.id != id)
            actualizarTurnos()
            localStorage.setItem('carrito', JSON.stringify(carritoTurnos))
            validar(turnoSeleccionado, 'none', 'block')
        }
        })
        
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
}

// BOTON PARA GUARDAR EL DETALLE DEL PEDIDO DEL USUARIO - "USUARIO + TURNOS SELECCIONADOS"

function finalizarPedido() {
    btnConfirmar.addEventListener("click",(e)=> {
        e.preventDefault()
        let userLs = JSON.parse(localStorage.getItem('usuario'))
        if (carritoTurnos == ""){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: ('debes seleccionar algo'),
                showConfirmButton: false,
                timer: 2000
            })
        }else if(localStorage.getItem('validar') == 'true'){

            userLs?.forEach(elemento=>{
                elemento.turno = carritoTurnos
                actualizarTurnos()
            })

            localStorage.setItem("pedido", JSON.stringify(userLs))
            let pedido = JSON.parse(localStorage.getItem("carrito"))
            let user = JSON.parse(localStorage.getItem('usuario'))
            user.concat(pedido)            
            
            Toastify({

                text: "Reserva Confirmada",
                
                duration: 3000
                
                }).showToast();
            
            }else if (localStorage.getItem('validar') == 'false'){

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: ('Lo siento debes iniciar sesion'),
                showConfirmButton: false,
                timer: 2000
            })            
        }
        
    })
}

function limpiarCarrito() {
    //Eliminando todos los hijos del carrito
    btnLimpiarCarrito.addEventListener("click", ()=>{

        let reiniciarContador = document.getElementById("contadorCarrito");
        while (reiniciarContador.firstChild) {
            reiniciarContador.removeChild(reiniciarContador.firstChild);
            
        }
        let reiniciarTurnos = document.getElementById("carrito-contenedor");
        while (reiniciarTurnos.firstChild) {
            reiniciarTurnos.removeChild(reiniciarTurnos.firstChild);
            localStorage.removeItem("carrito")
        }
        })    
}


mostrarTurnos(turnoStock)
mostrarUsuario()
limpiarCarrito()
finalizarPedido()
recuperar()

