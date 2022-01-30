class User {
	constructor(nombre, usuario, pass, email, edad, idUser) {        
		this.nombre = nombre
		this.usuario = usuario
		this.pass = pass
		this.email = email
		this.edad = edad
        this.idUser = idUser// QUIERO GENERAR ALGO QUE HAGA QUE EL ID DE USUARIO SE GENERE SOLO CON CADA ENTRADA, ES POSIBLE?
        //let idUser = function idUser() {
            //¿ACA DEBERIA ARMAR UNA FUNCION PARA ESO CON UNA OPERACION? 
            /*const idUser = function sumaUsers() {}*///??
        //} 
    }
}


//Nuevos usuarios creados por el usuario como objetos
const user1 = new User(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su usuario"),
    prompt("Ingrese su password"),
    /*prompt("Ingrese su email"),
    Number(prompt("Ingrese su edad"),
    alert ("Su ID de Usuario es: " + this.idUser)
)*/); //ACA ME GUSTARIA QUE EL "THIS.USER" SE GENERE SOLO CON CADA ENTRADA Y DESPUES SE LO MUESTRE AL USUARIO/

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

console.log("Usuarios creados: ", AcumUser);

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
const turnoL2 = new Turnos(1, 'Odontologia', "Lunes", "10.00 hs");
const turnoL3 = new Turnos(2, 'Traumatologia', "Lunes", "10.30 hs");
const turnoL4 = new Turnos(3, "Traumatologia", "Lunes", "10.00 hs");
const turnoL5 = new Turnos(4, "Odontologia", "Lunes", "10.30 hs");
const turnoL6 = new Turnos(5, "Odontologia", "Lunes", "11.00 hs");
const turnoM1 = new Turnos(6, "Pediatria", "Martes", "9.00 hs");
const turnoM2 = new Turnos(7, "Pediatria", "Martes", "9.30hs");
const turnoM3 = new Turnos(8, "Pediatria", "Martes", "10.00 hs");
const turnoM4 = new Turnos(9, "Pediatria", "Martes", "10.30 hs")


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


const confirmTurn = [];
console.log("Turnos Disponibles: ", AcumArray.length)
console.log(AcumArray)



//Seleccionar un turno
function selectTurno(turnoOk) {

    confirmTurn.push (turnoOk);
    
}
//Eliminar Turno 
//ACA QUISE ARMAR UNA FUNCION QUE ME SAQUE/ELIMINE LOS "TURNOS ELEGIDOS" DEL AcumArray, PERO EVIDENTEMENTE NO FUNCIONA.
/*function restTurno(deltTurn) {

    confirmTurn.pop(deltTurn)
    
}*/

selectTurno(AcumArray[5])
////restTurno(AcumArray[5]);
selectTurno(AcumArray [7])
////restTurno(AcumArray[7]);
console.log("Turnos seleccionados: ", confirmTurn); //ESTO LO AGREGUE DEL EJERCICIO DEL AFTER ANTERIOR DONDE FUNCIONABA EN EL EJEMPLO, PERO NO ME QUEDO MUY CLARO Y ACA NO FUNCIONA CREO                          
console.log(AcumArray.length);
//EL SENTIDO ES GENERAR UN ACUMULADOR QUE VAYA GUARDANDO LAS ENTRADAS? 


//Agregue un elemento nuevo a la "Base de datos" con .push
//AGREGAR TURNOS A LA BASE DE DATOS = AcumArray

const turnoM5 = new Turnos(10,"Rayos", "Martes", "9.50 hs");
AcumArray.push(turnoM5)
console.log(AcumArray[10]);
console.log(AcumArray.length);


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
