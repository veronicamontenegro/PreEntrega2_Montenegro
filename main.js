
// Array de objetos senderosArgentina 

class SenderoArgentina {
    constructor(id, nombre, descripcion, provincia, dificultad, distancia, duracion, desnivel) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.provincia = provincia;
      this.dificultad = dificultad;
      this.distancia = distancia; 
      this.duracion = duracion;
      this.desnivel = desnivel;
    }
}
  
const senderosArgentina = [
    new SenderoArgentina(
      1,
      "SENDERO DE LOS ARRAYANES",
      "Un encantador sendero rodeado de bosques de arrayanes en el Parque Nacional Los Arrayanes.",
      "Neuquén",
      "Moderado",
      8,
      3,
      792
    ),
    new SenderoArgentina(
      2,
      "SENDERO DEL CERRO URITORCO",
      "Un desafiante sendero que te lleva a la cima del Cerro Uritorco, la montaña más alta de Córdoba.",
      "Córdoba",
      "Difícil",
      12,
      6,
      872
    ),
    new SenderoArgentina(
      3,
      "SENDERO DE LA LAGUNA ESMERALDA",
      "Un pintoresco sendero que conduce a una hermosa laguna de color esmeralda en Tierra del Fuego.",
      "Tierra del Fuego",
      "Moderado",
      10,
      4,
      720
    ),
    new SenderoArgentina(
      4,
      "SENDERO DEL ACONCAGUA",
      "Un desafiante sendero que lleva a los aventureros a la base del majestuoso Aconcagua, la montaña más alta de América.",
      "Mendoza",
      "Difícil",
      20,
      10,
      880
    ),
    new SenderoArgentina(
      5,
      "SENDERO DE LA QUEBRADA DE HUMAHUACA",
      "Un sendero histórico que recorre paisajes impresionantes y sitios arqueológicos en la Quebrada de Humahuaca.",
      "Jujuy",
      "Moderado",
      15,
      8,
      652
    ),
    new SenderoArgentina(
      6,
      "SENDERO DE LAS SIETE CASCADAS",
      "Un relajante sendero que pasa por siete hermosas cascadas en la provincia de Misiones.",
      "Misiones",
      "Fácil",
      6,
      2,
      253
    ),
    new SenderoArgentina(
      7,
      "SENDERO DEL MIRADOR DEL FITZ ROY",
      "Un sendero panorámico que ofrece vistas impresionantes del famoso Cerro Fitz Roy en Santa Cruz.",
      "Santa Cruz",
      "Moderado",
      14,
      6,
      589
    ),
    new SenderoArgentina(
      8,
      "SENDERO DEL VOLCÁN LANÍN",
      "Un desafiante sendero que te lleva a la cumbre del imponente Volcán Lanín en la provincia de Neuquén.",
      "Neuquén",
      "Difícil",
      18,
      9,
      834
    ),
    new SenderoArgentina(
      9,
      "SENDERO DE LA QUEBRADA DE LAS CONCHAS",
      "Un espectacular sendero que recorre formaciones rocosas únicas en la Quebrada de las Conchas, Salta.",
      "Salta",
      "Moderado",
      12,
      5,
      638
    ),
    new SenderoArgentina(
      10,
      "SENDERO DE LOS GLACIARES",
      "Un increíble sendero que te permite acercarte a impresionantes glaciares en el Parque Nacional Los Glaciares.",
      "Santa Cruz",
      "Moderado",
      10,
      4,
      721
    ),
    new SenderoArgentina(
      11,
      "SENDERO DEL CERRO LOPEZ",
      "Un hermoso sendero que te lleva a lo largo de la ladera del Cerro López, ofreciendo vistas panorámicas de la región.",
      "Río Negro",
      "Moderado",
      10,
      4,
      753
    ),
    new SenderoArgentina(
      12,
      "SENDERO DEL CERRO TORRE",
      "Un desafiante sendero que conduce a la base del impresionante Cerro Torre, conocido por su belleza y dificultad.",
      "Santa Cruz",
      "Difícil",
      15,
      8,
      889
    ),
    
];




// Información de los senderos se muestra en el HTML

let cardContainer = document.getElementById('card-imagenes'); 

function mostrarSenderos(sendero, tarjetaDiv){  
  //tarjetaDiv = cardContainer.getElementsByClassName("card" + sendero.id)[0]; 
  let contenidoTarjeta = `
  <h3 class="card__sendero">${sendero.nombre}</h3>
  <h3 class="card__provincia">${sendero.provincia}</h3>
  <h4 class="card__dificultad">Dificultad: ${sendero.dificultad}</h4>
  <h4 class="card__descripcion">${sendero.descripcion}</h4>
  <p class="card__features">${sendero.distancia}km • ${sendero.duracion}hs • Desnivel: ${sendero.desnivel} mts.</p>
  <a href="#" class="card__btn">Explorar</a>
  `;
  tarjetaDiv.innerHTML = contenidoTarjeta;
}



// Carga de valores del local storage al cargar la pagina

document.addEventListener('DOMContentLoaded', () =>{
  const provinciaGuardada = localStorage.getItem('provincia') == true ;
  const dificultadGuardada = localStorage.getItem('dificultad');
  const minimoDistanciaGuardada = JSON.parse(localStorage.getItem('minimoDistancia'));
  const maximoDistanciaGuardada = JSON.parse(localStorage.getItem('maximoDistancia'));
  const minimoDuracionGuardada = JSON.parse(localStorage.getItem('minimoDuracion'));
  const maximoDuracionGuardada = JSON.parse(localStorage.getItem('maximoDuracion'));
  const minimoDesnivelGuardada = JSON.parse(localStorage.getItem('minimoDesnivel'));
  const maximoDesnivelGuardada = JSON.parse(localStorage.getItem('maximoDesnivel'));
  
  if (provinciaGuardada){
    const checkboxes = document.querySelectorAll('input[name="provincia"]');
    checkboxes.forEach(checkbox =>{
      checkbox.checked = provinciaGuardada.includes(checkbox.value);
    });
  }
  if(dificultadGuardada){
    document.getElementById('dificultad').value = dificultadGuardada;
  }

  if(minimoDistanciaGuardada){
    document.getElementById('min-distancia').value = minimoDistanciaGuardada;
  }

  if(maximoDistanciaGuardada){
    document.getElementById('max-distancia').value = maximoDistanciaGuardada;
  }

  if(minimoDuracionGuardada){
    document.getElementById('min-duracion').value = minimoDuracionGuardada;
  }

  if(maximoDuracionGuardada){
    document.getElementById('max-duracion').value = maximoDuracionGuardada;
  }

  if(minimoDesnivelGuardada){
    document.getElementById('min-desnivel').value = minimoDesnivelGuardada;
  }

  if(maximoDesnivelGuardada){
    document.getElementById('max-desnivel').value = maximoDesnivelGuardada;
  }

  

});

// Funcion para filtrar senderos & Storage 


function filtrarSenderos(){
  
  const provinciaCheckboxes = document.querySelectorAll('input[name="provincia"]:checked');
  const dificultad = document.getElementById('dificultad').value;
  const minimoDistancia = parseInt(document.getElementById('min-distancia').value) || null;
  const maximoDistancia = parseInt(document.getElementById('max-distancia').value) || null;
  const minimoDuracion = parseInt(document.getElementById('min-duracion').value) || null;
  const maximoDuracion = parseInt(document.getElementById('max-duracion').value) || null;
  const minimoDesnivel = parseInt(document.getElementById('min-desnivel').value) || null;
  const maximoDesnivel = parseInt(document.getElementById('max-desnivel').value) || null;
  const provincias = Array.from(provinciaCheckboxes).map(checkbox => checkbox.value);

  localStorage.setItem('provincias', JSON.stringify(provincias));
  localStorage.setItem('dificultad', dificultad);
  localStorage.setItem('minimoDistancia', minimoDistancia);
  localStorage.setItem('maximoDistancia', maximoDistancia);
  localStorage.setItem('minimoDuracion', minimoDuracion);
  localStorage.setItem('maximoDuracion', maximoDuracion);
  localStorage.setItem('minimoDesnivel', minimoDesnivel);
  localStorage.setItem('maximoDesnivel', maximoDesnivel);


  let provinciasFiltradas = senderosArgentina.filter(senderoArgentina =>{
    return (provincias.length === 0 || provincias.includes(senderoArgentina.provincia))
  });
  console.log(provinciasFiltradas)

  let dificultadFiltrada = senderosArgentina.filter(senderoArgentina =>{
    return (dificultad === ''|| senderoArgentina.dificultad === dificultad)
  });
  console.log(dificultadFiltrada)

  let minDistanciaFiltrada = dificultadFiltrada.filter(senderoArgentina =>{
    return (minimoDistancia === null || senderoArgentina.distancia >= minimoDistancia)
  })
  console.log(minDistanciaFiltrada)

  let maxDistanciaFiltrada = minDistanciaFiltrada.filter(senderoArgentina =>{
    return (maximoDistancia === null || senderoArgentina.distancia <= maximoDistancia)
  })
  console.log(maxDistanciaFiltrada)

  let minDuracionFiltrada = maxDistanciaFiltrada.filter(senderoArgentina =>{
    return (minimoDuracion === null || senderoArgentina.duracion >= minimoDuracion)
  })
  console.log(minDuracionFiltrada)

  let maxDuracionFiltrada = minDuracionFiltrada.filter(senderoArgentina =>{
    return (maximoDuracion === null || senderoArgentina.duracion <= maximoDuracion)
  })
  console.log(maxDuracionFiltrada)

  let minDesnivelFiltrada = maxDuracionFiltrada.filter(senderoArgentina =>{
    return (minimoDesnivel === null || senderoArgentina.desnivel >= minimoDesnivel)
  })
  console.log(minDesnivelFiltrada)

  let maxDesnivelFiltrada = minDesnivelFiltrada.filter(senderoArgentina =>{
    return (maximoDesnivel === null || senderoArgentina.desnivel <= maximoDesnivel)
  })
  console.log(maxDesnivelFiltrada)

  const senderosFiltrados = senderosArgentina.filter(senderoArgentina =>{
    return (provinciasFiltradas) &&
    (dificultadFiltrada) && 
    (minDistanciaFiltrada) && 
    (maxDistanciaFiltrada) && 
    (minDuracionFiltrada) && 
    (maxDuracionFiltrada) && 
    (minDesnivelFiltrada) && 
    (maxDesnivelFiltrada); 
  })

  console.log(senderosFiltrados)


  cardContainer.innerHTML= '';
  if(senderosFiltrados.length) {
    senderosFiltrados.forEach(sendero =>{
      tarjetaDiv = document.querySelector(`.card${sendero.id} .card${sendero.id}`);
      if(tarjetaDiv){
        mostrarSenderos(sendero, tarjetaDiv);  
      }    
    });  
  } else{
    cardContainer.innerHTML = '<p class="mensaje">No se encontraron resultados para tu búsqueda. Por favor, intentá nuevamente.</p>';
  };

}


//Prevent Default del submit

let form = document.getElementById('formulario')
form.addEventListener('submit', (evt) =>{
  evt.preventDefault();
}) 

// Evento del botón Buscar + Sweet alert
let btn = document.getElementById('btnBuscar');
btn.addEventListener('click', ()=> {
  filtrarSenderos();
  let timerInterval
  Swal.fire({
  title: 'Estamos buscando los mejores destinos para vos...',
  html: 'Terminaremos en <b></b> milisegundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('Ha terminado la búsqueda')
  }
})
})

function limpiarFormulario() {
  document.getElementById('formulario').reset();
}


// API clima

const clima = document.querySelector('#btnClima')
clima.addEventListener('click', ()=>{
  
  const key = "a96fd788a2b7558cdee739e307b89a8f";
  let ciudad = document.querySelector('#ciudad').value
  ciudad = encodeURIComponent(ciudad)

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`

  fetch(url)
    .then((res)=>{
      return res.json()
    })
    .then((clima =>{

      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: `Clima en ${(ciudad).toUpperCase()}`,
        text: `Temp. actual: ${parseInt(clima.main.temp -273.15)}° - Sensación térmica: ${parseInt(clima.main.feels_like -273.15)}°  - Humedad: ${clima.main.humidity}% - Viento: ${parseInt(clima.wind.speed *1.60934)}k/h`,
        showConfirmButton: false,
        showCloseButton: true,
        
      })

    }))
    .catch((error) =>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: 'No se encontraron resultados para la ciudad seleccionada.'
      });

    })

})



