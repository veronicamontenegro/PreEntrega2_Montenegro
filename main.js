
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
      "MODERADO",
      8,
      3,
      792
    ),
    new SenderoArgentina(
      2,
      "SENDERO DEL CERRO URITORCO",
      "Un desafiante sendero que te lleva a la cima del Cerro Uritorco, la montaña más alta de Córdoba.",
      "Córdoba",
      "DIFÍCIL",
      12,
      6,
      872
    ),
    new SenderoArgentina(
      3,
      "SENDERO DE LA LAGUNA ESMERALDA",
      "Un pintoresco sendero que conduce a una hermosa laguna de color esmeralda en Tierra del Fuego.",
      "Tierra del Fuego",
      "MODERADO",
      10,
      4,
      720
    ),
    new SenderoArgentina(
      4,
      "SENDERO DEL ACONCAGUA",
      "Un desafiante sendero que lleva a los aventureros a la base del majestuoso Aconcagua, la montaña más alta de América.",
      "Mendoza",
      "DIFÍCIL",
      20,
      10,
      880
    ),
    new SenderoArgentina(
      5,
      "SENDERO DE LA QUEBRADA DE HUMAHUACA",
      "Un sendero histórico que recorre paisajes impresionantes y sitios arqueológicos en la Quebrada de Humahuaca.",
      "Jujuy",
      "MODERADO",
      15,
      8,
      652
    ),
    new SenderoArgentina(
      6,
      "SENDERO DE LAS SIETE CASCADAS",
      "Un relajante sendero que pasa por siete hermosas cascadas en la provincia de Misiones.",
      "Misiones",
      "FÁCIL",
      6,
      2,
      253
    ),
    new SenderoArgentina(
      7,
      "SENDERO DEL MIRADOR DEL FITZ ROY",
      "Un sendero panorámico que ofrece vistas impresionantes del famoso Cerro Fitz Roy en Santa Cruz.",
      "Santa Cruz",
      "MODERADO",
      14,
      6,
      589
    ),
    new SenderoArgentina(
      8,
      "SENDERO DEL VOLCÁN LANÍN",
      "Un desafiante sendero que te lleva a la cumbre del imponente Volcán Lanín en la provincia de Neuquén.",
      "Neuquén",
      "DIFÍCIL",
      18,
      9,
      834
    ),
    new SenderoArgentina(
      9,
      "SENDERO DE LA QUEBRADA DE LAS CONCHAS",
      "Un espectacular sendero que recorre formaciones rocosas únicas en la Quebrada de las Conchas, Salta.",
      "Salta",
      "MODERADO",
      12,
      5,
      638
    ),
    new SenderoArgentina(
      10,
      "SENDERO DE LOS GLACIARES",
      "Un increíble sendero que te permite acercarte a impresionantes glaciares en el Parque Nacional Los Glaciares.",
      "Santa Cruz",
      "MODERADO",
      10,
      4,
      721
    ),
    new SenderoArgentina(
      11,
      "SENDERO DEL CERRO LOPEZ",
      "Un hermoso sendero que te lleva a lo largo de la ladera del Cerro López, ofreciendo vistas panorámicas de la región.",
      "Río Negro",
      "MODERADO",
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
  // tarjetaDiv = cardContainer.getElementsByClassName("card" + sendero.id)[0]; 
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

  
  const senderosFiltrados = senderosArgentina.filter(senderoArgentina =>{
    return (provincias.length === 0 || provincias.includes (senderoArgentina.provincia)) && 
    (dificultad === '' || senderoArgentina.dificultad === dificultad) && (minimoDistancia === null || senderoArgentina.distancia >= minimoDistancia) && (maximoDistancia === null || senderoArgentina.distancia <= maximoDistancia) && (minimoDuracion === null || senderoArgentina.duracion >= minimoDuracion) && (maximoDuracion === null || senderoArgentina.duracion <= maximoDuracion) && (minimoDesnivel === null || senderoArgentina.desnivel >= minimoDesnivel) && (maximoDesnivel === null || senderoArgentina.desnivel <= maximoDesnivel);
  });

  
  cardContainer.innerHTML= '';
  if(senderosFiltrados.length >0) {
    senderosFiltrados.forEach(sendero =>{
      tarjetaDiv = document.querySelector(`.card${sendero.id}`);
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

// Mostrar senderos al cargar la pagina

// senderosArgentina.forEach(sendero => {
//   mostrarSenderos(sendero, tarjetaDiv);
// });

function limpiarFormulario() {
  document.getElementById('formulario').reset();
}






