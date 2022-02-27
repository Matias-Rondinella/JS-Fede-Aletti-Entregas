//CLASE TURNOS

//Constructor de Turnos
class Turnos {

    constructor(id, area, dia, horario, cantidad){

        this.id = id;
        this.area = area;
		this.dia = dia;
        this.horario = horario;
        this.cantidad = cantidad
        
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
const turnoM6 = new Turnos(11,"Rayos", "Martes", "10:00 hs", 1);
const turnoM7 = new Turnos(12,"Rayos", "Martes", "10:30 hs", 1);
const turnoMr1 = new Turnos(13,"Pediatria", "Miercoles", "9:00 hs", 1);
const turnoMr2 = new Turnos(14,"Pediatria", "Miercoles", "10:00 hs", 1);
const turnoMr3 = new Turnos(15,"Pediatria", "Miercoles", "10:30 hs", 1);
const turnoMr4 = new Turnos(16,"Clinico", "Miercoles", "10:00 hs", 1);
const turnoMr5 = new Turnos(17,"Clinico", "Miercoles", "10:30 hs", 1);
const turnoMr6 = new Turnos(18,"Clinico", "Miercoles", "11:00 hs", 1);
const turnoJ1 = new Turnos(19,"Clinico", "Jueves", "9:00 hs", 1);
const turnoJ2 = new Turnos(20,"Clinico", "Jueves", "9:30 hs", 1);
const turnoJ3 = new Turnos(21,"Clinico", "Jueves", "10:00 hs", 1);
const turnoJ4 = new Turnos(22,"Clinico", "Jueves", "10:30 hs", 1);
const turnoJ5 = new Turnos(23,"Pediatria", "Jueves", "10:00 hs", 1);
const turnoJ6 = new Turnos(24,"Pediatria", "Jueves", "10:30 hs", 1);
const turnoJ7 = new Turnos(25,"Pediatria", "Jueves", "11:00 hs", 1);
const turnoJ8 = new Turnos(26,"Oftalmologia", "Jueves", "10:00 hs", 1);
const turnoJ9 = new Turnos(27,"Oftalmologia", "Jueves", "11:00 hs", 1);
const turnoV1 = new Turnos(28,"Oftalmologia", "Viernes", "10:00 hs", 1);
const turnoV2 = new Turnos(29,"Oftalmologia", "Viernes", "10:30 hs", 1);
const turnoV3 = new Turnos(30,"Oftalmologia", "Viernes", "11:00 hs", 1);
const turnoV4 = new Turnos(31,"Traumatologia", "Viernes", "10:00 hs", 1);
const turnoV5 = new Turnos(32,"Traumatologia", "Viernes", "10:30 hs", 1);
const turnoV6 = new Turnos(33,"Traumatologia", "Viernes", "11:00 hs", 1);




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
    turnoM4,
    turnoM5,
    turnoM6,
    turnoM7,
    turnoMr1,
    turnoMr2,
    turnoMr3,
    turnoMr4,
    turnoMr5,
    turnoMr6,
    turnoJ1,
    turnoJ2,
    turnoJ3,
    turnoJ4,
    turnoJ5,
    turnoJ6,
    turnoJ7,
    turnoJ8,
    turnoJ9,
    turnoV1,
    turnoV2,
    turnoV3,
    turnoV4,
    turnoV5,
    turnoV6
]
const confirmTurn = [];
//const confirmTurnLs = localStorage.setItem("confirmTurn", JSON.stringify(confirmTurn))
