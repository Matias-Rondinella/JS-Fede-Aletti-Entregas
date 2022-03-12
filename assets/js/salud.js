// VARIABLES

let carritoTurnos = []
let validarCerrar = false

const contenedorTurnos = document.getElementById('contenedor-turnos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const selecTurnos = document.getElementById("selecTurnos")
const sectionTurnos = document.getElementById('sectionTurnos')

const buscador = document.getElementById("buscador")
const btnConfirmar = document.getElementById("btnConfirmar")

const cerrarSesion = document.getElementById('cerrarSesion')

//EVENTOS BUSCADOR Y SELECT

//filtrado BUSCADOR
buscador.addEventListener("input", ()=>{
    let arrayFiltrado = turnoStock.filter(el => el.area.toLowerCase().includes(buscador.value.toLowerCase()))
    buscador.value == "" ? mostrarTurnos(turnoStock) : mostrarTurnos(arrayFiltrado) // ===>> TERNARIO
    })

//FILTRO SELECT * value.dia
selecTurnos.addEventListener('change',()=>{
    selecTurnos.value == "Todos" ? mostrarTurnos(turnoStock) : mostrarTurnos(turnoStock.filter(el => el.dia == selecTurnos.value)) // ===>> TERNARIO
        
    }
)

//LOGICA

// FUNCIONES GENERALES
function validar(turno,si , no){

    let ocultarTurno = document.getElementsByClassName(`boton${turno.area}`)    
    let parrafo = document.getElementById(`parrafo${turno.id}`)
    for (const btn of ocultarTurno) {
        
        btn.style.display = no;
        parrafo.style.display = si;
    }
    
}

function mostrarTurnos(turnoStock){
    if (localStorage.getItem('validar')== 'true') {       
        
        for (const turno of turnoStock) {
            
            const {id, area, dia, horario} = turno //=====>> Desestructuracion de Objeto

            let div = document.createElement('div');
            div.className = 'turno';
            div.innerHTML += `<div class="card cardTurno">
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
    }else{
        contenedorTurnos.innerHTML ='';
        document.getElementById('contenedor-turnos').style.display = 'none';
        document.getElementById('boton-carrito').style.display = 'none';
        document.getElementById('sectionTurnos').style.display = 'none';
    }
}

function mostrarUsuario() {
    let userLs = JSON.parse(localStorage.getItem('usuario'))

    if(localStorage.getItem('validar')== 'true'){
        
        let userIndex = document.getElementById('userLocal')
        
        userIndex.innerText= ` Hola ${userLs[0].usuario} `

        let div = document.createElement("div")
        div.className = "btnCerrar"
        div.innerHTML += `
                        <a class="btn btn-primary btn-lg" href="#" role="button" id= "btnCerrar"> Cerrar Sesion </a>
                        `
        userLocal.appendChild(div);

        let btnCerrar = document.getElementById ('btnCerrar')

        btnCerrar.addEventListener('click', ()=>{            

            document.getElementById('userLocal').style.display = 'none';
            document.getElementById('btnCerrar').style.display = 'none';
            document.getElementById('contenedor-turnos').style.display = 'none';
            document.getElementById('boton-carrito').style.display = 'none';
            document.getElementById('sectionTurnos').style.display = 'none';

            localStorage.setItem('validar', validarCerrar) 
            window.location.replace('salud.html')

            
        })
        
    }else {

        document.getElementById('btnIniciar').style.display = 'block';      

        btnIniciar.innerHTML = `
                        <a class="btn btn-primary btn-lg" href="../index.html" role="button" id= "btnIniciar"> Iniciar Sesion / Registrarse </a>
                `
            
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
                    <button id="botonEliminar${id}">
                        <img src="../assets/imgs/eliminarTurnos.svg" alt="eliminar">
                    </button>
                    <p id="parrafoModal${id}" style='color:red;'>SIN CONFIRMACION</p>
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

    btnConfirmar.addEventListener("click",()=> {       
        
        let userLs = JSON.parse(localStorage.getItem('usuario'))
        if(carritoTurnos == []){
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
                
            })

            localStorage.setItem("pedido", JSON.stringify(userLs))
            let pedido = JSON.parse(localStorage.getItem("carrito"))
            let user = JSON.parse(localStorage.getItem('usuario'))
            user.concat(pedido)            
            
            document.getElementById(`botonEliminar${id}`).style.display = 'none'
            document.getElementById(`parrafoModal${id}`).style.display = 'none'
            
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

// FUNCIONES SECUNDARIAS

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

function confirmarPedido() {
    
}

// EJECUCION

mostrarTurnos(turnoStock)
mostrarUsuario()
confirmarPedido()
recuperar()

