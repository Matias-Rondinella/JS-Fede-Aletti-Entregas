/* ----------------------------------- DOM ---------------------------------- */
let form = document.getElementById("form")
let table = document.getElementById("table")
let limpiar = document.getElementById("limpiar")

/* ---------------------------------- CLASSES --------------------------------- */
class User {
	constructor(nombre, apellido, email, password, age) {
		this.nombre = nombre
		this.apellido = apellido
		this.email = email
		this.password = password
		this.age = age
	}

	saludar() {
		// alert(`Hola, ${this.nombre} ${this.apellido}`)
		console.log(Object.keys(this))
	}
}

/* ----------------------------------- EVENTS ---------------------------------- */
form.addEventListener("submit", guardar)
limpiar.addEventListener("click", limpiarStorage)

/* ----------------------------------- FUNCTIONS ---------------------------------- */
function guardar(e) {
	// e = evento
	e.preventDefault()
	let nombre = document.getElementById("nom").value
	let apellido = document.getElementById("ape").value
	let edad = document.getElementById("edad").value
	let email = document.getElementById("email").value
	let password = document.getElementById("pass").value

	let usuario = new User(nombre, apellido, email, password, edad)

	guardarStorage(usuario)
}

function mostrar() {
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
}

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

// let users = JSON.parse(localStorage.getItem("usuarios")) || []

/* -------------------------------------------------------------------------- */
/*                                LOCAL STORAGE                               */
/* -------------------------------------------------------------------------- */

// // Mandar array a local storage
// localStorage.setItem("usuarios", JSON.stringify(users))

// // mandar array de productos
// localStorage.setItem("productos", JSON.stringify(productos))

// // Recibir array de local storage
// let users = JSON.parse(localStorage.getItem("usuarios"))
