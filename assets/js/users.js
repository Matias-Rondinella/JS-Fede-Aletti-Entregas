/* ----------------------------------- DOM ---------------------------------- */
let form = document.getElementById("form")
//let table = document.getElementById("table")
//let limpiar = document.getElementById("limpiar")

/* ---------------------------------- CLASSES --------------------------------- */
class User {
	constructor(nombre, usuario, pass, email, idUser) {        
		this.nombre = nombre.toUpperCase();
		//this.usuario = usuario.toUpperCase();
		this.pass = pass;
		//this.email = email;
        this.idUser = randomNumber(1,300);
        alert ("Su ID de Usuario es: " + this.idUser + this.usuario) 
    }
}

/* ----------------------------------- EVENTS ---------------------------------- */
form.addEventListener("submit", guardar)
//limpiar.addEventListener("click", limpiarStorage)

/* ----------------------------------- FUNCTIONS ---------------------------------- */

//FUNCION RANDOM NUMBER
//Generar un valor random entre un min y un max para nuestro idUser de la Class "User{constructor}"

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guardar(e) {
	// e = evento
	e.preventDefault()
    let nombre = document.getElementsByClassName("userName").value  
	//let user = document.getElementByIClassName("userTag").value
    let pass = document.getElementById("passUser").value
    //let email = document.getElementById("email").value
	let idUser = randomNumber(1,300)
	

	let usuario = new User(nombre,  pass,  idUser)

	guardarStorage(usuario)
}


//ESTA FUNCION ME VA A SERVIR PARA MOSTRAR EL CARRITO

/*function mostrar() {
	table.innerHTML = ``

	let acumulador = ``

	users.map((user, index) => {
		acumulador += `
            <tr class="table-active">
                <td>${index + 1}</td>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr>
        `
	})
	table.innerHTML = acumulador
}*/

function guardarStorage(usuario) {
	users.push(usuario)

	localStorage.setItem("usuarios", JSON.stringify(users))
	mostrar()
}

function limpiarStorage() {
	users = []
	localStorage.clear()
	mostrar()
}

/* -------------------------------- EJECUCIÓN ------------------------------- */
let users = []

if (localStorage.getItem("usuarios")) {
	users = JSON.parse(localStorage.getItem("usuarios"))
} else {
	users = []
}