// =================== CLASES CONSTRUCTORAS ====================== //
/*

//CLASE USER

//Constructor de Usuarios
class User {
	constructor(nombre, usuario, pass, email, edad, idUser) {        
		this.nombre = nombre.toUpperCase();
		this.usuario = usuario.toUpperCase();
		this.pass = pass;
		this.email = email;
		this.edad = edad;
        this.idUser = randomNumber(1,300);
        alert ("Su ID de Usuario es: " + this.idUser + this.usuario) 
    }
}

//CLASE TURNOS

//Constructor de Turnos
class Turnos {

    constructor(id, area, dia, horario){

        this.id = id;
        this.area = area;
		this.dia = dia;
        this.horario = horario;
    }
}




//========================== FUNCIONES ============================ //


//FUNCION RANDOM NUMBER
//Generar un valor random entre un min y un max para nuestro idUser de la Class "User{constructor}"

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//randomNumber(,) - ejecuta la función.


//FUNCION CREAR USUARIO
//Guarda los datos del nuevo usuario en "AcumUser[]".
//Nuevos usuarios creados por el usuario como objetos
const user = new User(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su usuario"),
    prompt("Ingrese su password"),
    //prompt("Ingrese su email"),
    //Number(prompt("Ingrese su edad"),
    //)
    );

const AcumUser = [
    //user1, 
    //user2
]

function crearUsuario(user) {
    AcumUser.push (user);
    for (const iterator of AcumUser) {
        console.log("Usuario creado: ");
        console.log(iterator.usuario);    
    }   
}
//crearUsuario() //ejecuta la función.

//FUNCION MOSTRAR TURNOS


//Muestra los turnos disponibles al usuario, estos estan alojados en "AcumArray[]".
function mostrarTurnos() {
    console.log("Turnos Disponibles: ")
    //For Of para mostrar las areas deL AcumArray
    for (const iterator of AcumArray) {
        console.log(iterator.area + " " + iterator.horario+ " " + iterator.dia);    
    }    
}
//mostrarTurnos()


//FUNCION SELECCIONAR TURNOS
//Seleccionar un turno y alojarlo en nuestro carrito: "confirmTurn[]"

//Acumulador de turnos pedidos/Carrito de Turnos
const confirmTurn = [];

function selectTurno(turno) {
    confirmTurn.push (turno);
    console.log("Turnos seleccionados: ");
    for (const iterator of confirmTurn) {
        console.log(iterator.area + " " + iterator.horario+ " " + iterator.dia);    
    }
}

//selectTurno(AcumArray[5])
//selectTurno(AcumArray [7]) 

function eliminar (a,b) {
    AcumArray.splice(a,b) 
    console.log("Ahora quedan:" + AcumArray.length + " turnos disponibles.");
    //For Of para mostrar las areas deL AcumArray
    for (const iterator of AcumArray) {
        console.log(iterator.area);
    
}   
}
//eliminar(5,1)
//eliminar(7,1)

//Agregue un elemento nuevo a la "Base de datos" con .push
//AGREGAR TURNOS A LA BASE DE DATOS = AcumArray

function agregarTurnos(i) {
    AcumArray.push(i) //carga turnoM5 a AcumArray
    console.log(AcumArray.includes(i));// se fija si turnoM5 fue agregado o no
    console.log("Elemento agregado a AcumArray en la posicion: " + AcumArray.indexOf(i) + "." + 
    //muestra la posicion de mi nuevo Objeto dentro del Array
    " Listado de turnos actualizado: " + AcumArray.length + " elementos.");
    //Muestra la cantidad de elementos dentro de mi Array
    for (const iterator of AcumArray) {
        console.log(iterator.area);        
    }    
}

//agregarTurnos(turnoM5)

//Turnos por dias // Funcion => TURNOS FILTRADOS POR DIA

const turnosL = AcumArray.filter ((turnos) => turnos.dia == "Lunes");
const turnosM = AcumArray.filter ((turnos) => turnos.dia == "Martes");
const turnosMier = AcumArray.filter ((turnos) => turnos.dia == "Miercoles");

//Turnos por Area // Funcion => TURNOS FITRADOS POR AREA

const traumat = AcumArray.filter ((areas) => areas.area == "Traumatologia");
const odont = AcumArray.filter ((areas) => areas.area == "Odontologia");
const pediat = AcumArray.filter ((areas) => areas.area == "Pediatria");

//========================================= EJECUCION =============================================== //


crearUsuario();
mostrarTurnos();
selectTurno(AcumArray[5]);
selectTurno(AcumArray [7]);
eliminar(5,1);
eliminar(7,1);
agregarTurnos(turnoM5);

console.log("Los martes atiende: ", turnosM);
console.log("Turnos de Odontologia para esta semana: ", odont);

//Mostrar Datos de Usuario y turno seleccionado con .concat - "Orden de Turno"

const ordTurno = AcumUser.concat(confirmTurn);
console.log(ordTurno);


/*let email = document.getElementsByClassName("emailLog");
let pass = document.getElementsByClassName("passLog")

console.log(emailLog.innerhtml)
console.log(passLog.innerhtml);*/


//Login con eventos 

/*let btnLog = document.getElementById("ingresar");
    btnLog.addEventListener("click", crearUsuario) 
    function crearUsuario(e) {
        e.preventDefault()
        let usuario = document.getElementById("emailLog").value;
        let pass = document.getElementById("passLog").value;
        let userAndPass = document.getElementById ("userAndPass")
        userAndPass.innerHTML = 
        "<h2> Su Email y Constraseña son : </h2><br><h3> Email: </h3>" 
        + `${usuario}` 
        + "<br>" 
        + "<h3> Contraseña: </h3>" 
        + `${pass}`
    }


const contenedorTurnos = document.getElementById("contenedorTurnos");
const selectTurnos = document.getElementById("selectTurnos");

selectTurnos.addEventListener("change",()=>{
    console.log(selectTurnos.value)
    if (selectTurnos.value == "Todos") {
        mostrarTurnos(turnos)
        
    }else{
        mostrarTurnos(turnos.filter(el=> el.area == selectTurnos.value))
    }
})

mostrarTurnos(turnos)

function mostrarTurnos(array) {
    contenedorTurnos.innerHTML="";
    array.forEach(listaTurnos => {
        let section = document.createElement("section")
        section.className = "listaTurnos"
        section.innerHTML += `
                            <div class="card mb-3" style="max-width: 540px;">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src= ${listaTurnos.img} alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5>${listaTurnos.area} </h5>
                                            <p>${listaTurnos.dia} </p>
                                            <p>${listaTurnos.horario}</p>
                                            <button id= "${listaTurnos.id}" class="btnSeleccionar">Reservar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>     
        `
        contenedorTurnos.appendChild(section)

    });
    
}

let btnSeleccionar = document.getElementsByClassName("btnSeleccionar")
for (const iterator of btnSeleccionar) {
    iterator.addEventListener("click",()=>{
        let btnOk = turnos.find(item => item.id == iterator.id)
        confirmTurn.push(btnOk)
        console.log(btnOk);

    })
}*/


/* PARA PROBAR MOSTRAR TURNOS CON SELECTS

        <!--*************************************** A PROBAR **********************************************************-->
        <!-- INICIO Turnos por area en un Dropdown de Bootstrap -->
        <!-- TRAUMATOLOGIA -->
        <!--<div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                Traumatologia
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="contenedor-turnos-traum">
                
            </div>
        </div>-->        
        <!--************************************************************************************************************-->
        */


