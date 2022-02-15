let carritoTurnos = []

const contenedorTurnos = document.getElementById('contenedor-turnos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const selecTurnos = document.getElementById("selecTurnos")

const turnosTraum = document.getElementById("contenedor-turnos-traum")


//Turnos por Area // Funcion => TURNOS FITRADOS POR AREA

let traumat = turnoStock.filter ((areas) => areas.area == "Traumatologia");
let odont = turnoStock.filter ((areas) => areas.area == "Odontologia");
let pediat = turnoStock.filter ((areas) => areas.area == "Pediatria");



function mostrarTraum(traumat) {
    //let traumat = turnoStock.filter ((areas) => areas.area == "Traumatologia");
    turnosTraum.innerText = "";
    for (const turno of traumat) {
        let div = document.createElement("div")
        div.className="turnos-traumatologia"
        div.innerHTML=`
                    <p>${turno.area}</p>
        `
        turnosTraum.appendChild(div)
        console.log();
    }
    
}






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
        div.innerHTML += `<div class="card">
                            <div class="card-image">
                                <img src=${turno.img} class= "rounded-circle">
                                <span class="card-title">${turno.area}</span>                                
                            </div>
                            <div class="card-content">
                                <p>${turno.dia}</p>
                                <p>${turno.horario}</p>
                                <a id="botonAgregar${turno.id}" class="btn-floating halfway-fab waves-effect waves-light red"><img src="assets/imgs/carritoTurnos.svg" alt=""></a>
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
    let turnoRepetido = carritoTurnos.find(elemento => (elemento.id == id))
    if (turnoRepetido) {
        alert("El turno ya fue seleccionado")
    }else{
        let turnoSeleccionado = turnoStock.find(el => el.id == id)
        carritoTurnos.push(turnoSeleccionado)
        actualizarTurnos()
        let div = document.createElement("div")
        div.className = "lista-turnos"
        div.innerHTML += `
                        <h5>${turnoSeleccionado.area}</h5>
                        <p>${turnoSeleccionado.dia}</p>
                        <P>${turnoSeleccionado.horario}</P>
                        <button id=botonEliminar${turnoSeleccionado.id}>
                            <img src="assets/imgs/eliminarTurnos.svg" alt="eliminar">
                        </button>
                        
                        
        
        `
        contenedorCarrito.appendChild(div);
        let botonEliminar = document.getElementById(`botonEliminar${turnoSeleccionado.id}`)
        botonEliminar.addEventListener("click",()=>{
            console.log(turnoSeleccionado.id);
            botonEliminar.parentElement.remove() 
            carritoTurnos = carritoTurnos.filter(el => el.id != turnoSeleccionado.id)
            actualizarTurnos()
        })

    }

}

function confirmar() {

} 
    


function  actualizarTurnos (){
    contadorCarrito.innerText = carritoTurnos.reduce((acc,el)=> acc + el.cantidad, 0)

    
}

