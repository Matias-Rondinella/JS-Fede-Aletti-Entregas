//Generar un valor random entre un min y un max para el idUser

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
//Nuevos usuarios creados por el usuario como objetos
const user1 = new User(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su usuario"),
    prompt("Ingrese su password"),
    /*prompt("Ingrese su email"),
    Number(prompt("Ingrese su edad"),
    )*/); 

/*const user2 = new User(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su usuario"),
    prompt("Ingrese su password"),
    /*prompt("Ingrese su email"),
    Number(prompt("Ingrese su edad"),
    alert ("Su ID de Usuario es: " + this.idUser)
    ));*/    
const AcumUser = [
    user1, 
    //user2
        
]
function crearUsuario() {
    AcumUser.push ();
    console.log("Usuario creado: ");
    for (const iterator of AcumUser) {
        console.log(iterator.usuario);    
    }    

}
crearUsuario()

//Constructor de Turnos
class Turnos {

    constructor(id, area, dia, horario){

        this.id = id;
        this.area = area;
		this.dia = dia;
        this.horario = horario;
    }
}

// Turnos
const turnoL1 = new Turnos(0, 'Traumatologia', "Lunes", "9.30 hs");
const turnoL2 = new Turnos(1, "Traumatologia", "Lunes", "10.00 hs");
const turnoL3 = new Turnos(2, 'Traumatologia', "Lunes", "10.30 hs");
const turnoL4 = new Turnos(3, 'Odontologia', "Lunes", "10.00 hs");
const turnoL5 = new Turnos(4, "Odontologia", "Lunes", "10.30 hs");
const turnoL6 = new Turnos(5, "Odontologia", "Lunes", "11.00 hs");
const turnoM1 = new Turnos(6, "Pediatria", "Martes", "9.00 hs");
const turnoM2 = new Turnos(7, "Pediatria", "Martes", "9.30 hs");
const turnoM3 = new Turnos(8, "Pediatria", "Martes", "10.00 hs");
const turnoM4 = new Turnos(9, "Pediatria", "Martes", "10.30 hs");

// Todos los turnos en un Array
const AcumArray = [
    turnoL1, 
    turnoL2, 
    turnoL3,
    turnoL4,
    turnoL5,
    turnoL6,
    turnoM1,
    turnoM2,
    turnoM3,
    turnoM4    
]

function mostrarTurnos() {
    console.log("Turnos Disponibles: ")
    //For Of para mostrar las areas deL AcumArray
    for (const iterator of AcumArray) {
        console.log(iterator.area + " " + iterator.horario+ " " + iterator.dia);    
    }    
}
mostrarTurnos()

//Acumulador de turnos pedidos
const confirmTurn = [];

//Seleccionar un turno
function selectTurno(turno) {
    confirmTurn.push (turno);
    console.log("Turnos seleccionados: ");
    for (const iterator of confirmTurn) {
        console.log(iterator.area + " " + iterator.horario+ " " + iterator.dia);    
    }
}
selectTurno(AcumArray[5])
selectTurno(AcumArray [7]) 

function eliminar (a,b) {
    AcumArray.splice(a,b) 
    console.log("Ahora quedan:" + AcumArray.length + " turnos disponibles.");
    //For Of para mostrar las areas deL AcumArray
    for (const iterator of AcumArray) {
        console.log(iterator.area);
    
}   
}
eliminar(5,1)
eliminar(7,1)

//Agregue un elemento nuevo a la "Base de datos" con .push
//AGREGAR TURNOS A LA BASE DE DATOS = AcumArray

const turnoM5 = new Turnos(10,"Rayos", "Martes", "9.50 hs");

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

agregarTurnos(turnoM5)


//Turnos por dias // Funcion =>

const turnosL = AcumArray.filter ((turnos) => turnos.dia == "Lunes");
const turnosM = AcumArray.filter ((turnos) => turnos.dia == "Martes");
const turnosMier = AcumArray.filter ((turnos) => turnos.dia == "Miercoles");

console.log("Los martes atiende: ", turnosM);

//Turnos por Area // Funcion =>

const traumat = AcumArray.filter ((areas) => areas.area == "Traumatologia");
const odont = AcumArray.filter ((areas) => areas.area == "Odontologia");
const pediat = AcumArray.filter ((areas) => areas.area == "Pediatria");

console.log("Turnos de Odontologia para esta semana: ", odont);

//Mostrar Datos de Usuario y turno seleccionado con .concat - "Orden de Turno"

const ordTurno = AcumUser.concat(confirmTurn);
console.log(ordTurno);
