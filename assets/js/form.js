/* *************** SELECTORS/ DOM *************** */

const inpUser = document.getElementById("userName");
const inpPass = document.getElementById("passLog");
const btnEnviar = document.getElementById("ingresar");
let form = document.getElementById("form")
//let table = document.getElementById("table")
//let limpiar = document.getElementById("limpiar")

/* *************** LISTENERS/eventos *************** */

btnEnviar.addEventListener("click", formEnviar);
form.addEventListener("submit", guardar);
//limpiar.addEventListener("click", limpiarStorage)


/* ---------------------------------- CLASSES --------------------------------- */
class User {
	constructor(nombre, pass, idUser) {        
		this.nombre = nombre
		//this.usuario = usuario.toUpperCase();
		this.pass = pass;
		//this.email = email;
        this.idUser = idUser;
        alert ("Su ID de Usuario es: " + this.idUser + this.usuario) 
    }
}

/* ----------------------------------- FUNCTIONS ---------------------------------- */

//FUNCION RANDOM NUMBER
//Generar un valor random entre un min y un max para nuestro idUser de la Class "User{constructor}"
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ver datos de formularios
function formEnviar(e) {
    e.preventDefault();
    if (inpUser.value === '') {
        alert('el campo contraseña es obligatorio')

    } else if ((inpPass.value === "@" && ".com")) {
        alert("Los datos no son válidos. Por favor, vuelva a cargar el formulario.")
    }

    console.log(inpUser.value);
    console.log(inpPass.value);

    

}

function guardar(e) {
	// e = evento
	e.preventDefault()
    let nombre = document.getElementById("userName").value  
	//let user = document.getElementByIClassName("userTag").value
    let pass = document.getElementById("passLog").value
    //let email = document.getElementById("email").value
	let idUser = randomNumber(1,300)
	

	let usuario = new User(nombre,  pass,  idUser)
    console.log(usuario);
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

function guardarStorage(i) {
	users.push(i)

	localStorage.setItem("usuarios", JSON.stringify(users))
	mostrar()
}

function limpiarStorage() {
	users = []
	localStorage.clear()
	mostrar()
}

let users = []

if (localStorage.getItem("usuarios")) {
	users = JSON.parse(localStorage.getItem("usuarios"))
} else {
	users = []
}


//Login con eventos 

// let btnLog = document.getElementById("ingresar");
//     btnLog.addEventListener("click", crearUsuario) 
//     function crearUsuario(e) {
//         e.preventDefault()
//         let usuario = document.getElementById("emailLog").value;
//         let pass = document.getElementById("passLog").value;
//         let userAndPass = document.getElementById ("userAndPass")
//         userAndPass.innerHTML = 
//         "<h2> Su Email y Constraseña son : </h2><br><h3> Email: </h3>" 
//         + `${usuario}` 
//         + "<br>" 
//         + "<h3> Contraseña: </h3>" 
//         + `${pass}`
//     }