let datos =[]

let btnRegistro = document.getElementById('registro')
let btnIngreso = document.getElementById('ingreso')

let validarLog = false
localStorage.setItem('validar',(validarLog))

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnRegistro.addEventListener('click', ()=>{
    const usuarioRegistrado =document.getElementById('userRegis').value.toLowerCase()
    const contraseñaRegistrada = document.getElementById('passRegis').value.toLowerCase()
    const reContraseña =document.getElementById('rePassRegis').value.toLowerCase()
    const email = document.getElementById('email').value.toLowerCase()
    
    validar(usuarioRegistrado, contraseñaRegistrada,reContraseña,email)
})

class Usuario{
    constructor(usuario,pass,email) {
        this.usuario = usuario + randomNumber(1,300);
        this.pass=pass
        this.email=email
        Swal.fire({
            title: "Usuario creado",
            title: "Tu Usuario es: " + this.usuario,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}

function validar(usuarioRegistrado, contraseñaRegistrada,reContraseña,email){

        if(usuarioRegistrado == "" || contraseñaRegistrada == "" ||reContraseña == "" || email == ""){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'los campos no deben estar vacio',
                showConfirmButton: false,
                timer: 2000
            })           
    }
        else if(contraseñaRegistrada.length < 6){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'la contraseña debe ser mayor a 6 digitos',
                showConfirmButton: false,
                timer: 2000
            }) 
        
    }
        else if(contraseñaRegistrada != reContraseña){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'las contraseña no coinciden',
                showConfirmButton: false,
                timer: 2000
            }) 
        
    }
    else{
        datos.push(new Usuario(usuarioRegistrado,contraseñaRegistrada,email))

        localStorage.setItem('usuario', JSON.stringify(datos))
        
        document.getElementById('userRegis').value.toLowerCase() = ""
        document.getElementById('passRegis').value.toLowerCase()= ""
        document.getElementById('rePassRegis').value.toLowerCase()= ""
        document.getElementById('email').value.toLowerCase() = ""

        document.getElementById('tab-2').checked = false
        document.getElementById('tab-1').checked = true
    }
}

btnIngreso.addEventListener('click',ingresar)

function ingresar(){
    const usuario =document.getElementById('user').value.toLowerCase()
    const contraseña = document.getElementById('pass').value.toLowerCase()

    let validacion = validarIngreso(usuario,contraseña)
    let recuperoLocalS= JSON.parse(localStorage.getItem('usuario'))

    if(validacion){
        if((recuperoLocalS[0].usuario == usuario) && (recuperoLocalS[0].pass == contraseña)){
            document.getElementById('user').value = "";
            document.getElementById('pass').value= "";
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'inicio de sesion correcto',
                showConfirmButton: false,
                timer: 2000
            })

            validarLog = true

            localStorage.setItem('validar', validarLog) 
            window.location.replace('views/salud.html')            

        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Vete Intruso',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }
    else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'lo siento algo debe estar mal!',
            showConfirmButton: false,
            timer: 2000
        })
        
    }
}

function validarIngreso(usuario,contraseña) {
    if(usuario == "" || contraseña == ""){
        return false
    }else{
        return true
    }
}


