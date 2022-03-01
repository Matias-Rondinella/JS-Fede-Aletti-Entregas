const divInfoClima = document.getElementById('divInfoClima')

async function obtenerClima() {

    const clima = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-32.3667&lon=-65.95&units=metric&appid=2d752eb5c3adf8b088db06dedd5a5dbb")
    const datos = await clima.json();
    const {main} = datos

    mostrarClima(main);
    
}

obtenerClima()

function mostrarClima (tiempo) { 
    //scripting
    const divClima = document.createElement('div');
    divClima.classList.add('climaContenedor');
    

    const temp = document.createElement('p')
    temp.classList.add('temperatura')
    temp.textContent = "Temperatura: " + parseInt(tiempo.temp) + "°C"

    const feels_like = document.createElement('p')
    feels_like.classList.add('termica')
    feels_like.textContent = "Sensacion Termica: " + parseInt(tiempo.feels_like) + "°C"

    const humidity = document.createElement('p')
    humidity.classList.add('humedad')
    humidity.textContent = "Humedad: " + parseInt(tiempo.humidity) + "%"
    

    divClima.appendChild(temp)
    divClima.appendChild(feels_like) 
    divClima.appendChild(humidity)   
    
    divInfoClima.appendChild(divClima)

}