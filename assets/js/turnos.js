//CLASE TURNOS

//Constructor de Turnos
class Turnos {

    constructor(id, area, dia, horario, img, cantidad){

        this.id = id;
        this.area = area;
		this.dia = dia;
        this.horario = horario;
        this.img = "assets/imgs/saludTurnos.svg";
        this.cantidad = 1
    }
}

// Turnos
const turnoL1 = new Turnos(0, 'Traumatologia', "Lunes", "9.30 hs", 1) ;
const turnoL2 = new Turnos(1, "Traumatologia", "Lunes", "10.00 hs", 1) ;
const turnoL3 = new Turnos(2, 'Traumatologia', "Lunes", "10.30 hs",1) ;
const turnoL4 = new Turnos(3, 'Odontologia', "Lunes", "10.00 hs", 1) ;
const turnoL5 = new Turnos(4, "Odontologia", "Lunes", "10.30 hs", 1) ;
const turnoL6 = new Turnos(5, "Odontologia", "Lunes", "11.00 hs", 1) ;
const turnoM1 = new Turnos(6, "Pediatria", "Martes", "9.00 hs", 1) ;
const turnoM2 = new Turnos(7, "Pediatria", "Martes", "9.30 hs", 1) ;
const turnoM3 = new Turnos(8, "Pediatria", "Martes", "10.00 hs", 1) ;
const turnoM4 = new Turnos(9, "Pediatria", "Martes", "10.30 hs", 1) ;
const turnoM5 = new Turnos(10,"Rayos", "Martes", "9.50 hs", 1); 

// Todos los turnos en un Array
const turnoStock = [
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
//const confirmTurnLs = localStorage.setItem("confirmTurn", JSON.stringify(confirmTurn))
