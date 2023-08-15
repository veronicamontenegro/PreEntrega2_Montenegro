
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
      "NEUQUÉN",
      "MODERADO",
      8,
      3,
      792
    ),
    new SenderoArgentina(
      2,
      "SENDERO DEL CERRO URITORCO",
      "Un desafiante sendero que te lleva a la cima del Cerro Uritorco, la montaña más alta de Córdoba.",
      "CÓRDOBA",
      "DIFÍCIL",
      12,
      6,
      872
    ),
    new SenderoArgentina(
      3,
      "SENDERO DE LA LAGUNA ESMERALDA",
      "Un pintoresco sendero que conduce a una hermosa laguna de color esmeralda en Tierra del Fuego.",
      "TIERRA DEL FUEGO",
      "MODERADO",
      10,
      4,
      720
    ),
    new SenderoArgentina(
      4,
      "SENDERO DEL ACONCAGUA",
      "Un desafiante sendero que lleva a los aventureros a la base del majestuoso Aconcagua, la montaña más alta de América.",
      "MENDOZA",
      "DIFÍCIL",
      20,
      10,
      880
    ),
    new SenderoArgentina(
      5,
      "SENDERO DE LA QUEBRADA DE HUMAHUACA",
      "Un sendero histórico que recorre paisajes impresionantes y sitios arqueológicos en la Quebrada de Humahuaca.",
      "JUJUY",
      "MODERADO",
      15,
      8,
      652
    ),
    new SenderoArgentina(
      6,
      "SENDERO DE LAS SIETE CASCADAS",
      "Un relajante sendero que pasa por siete hermosas cascadas en la provincia de Misiones.",
      "MISIONES",
      "FÁCIL",
      6,
      2,
      253
    ),
    new SenderoArgentina(
      7,
      "SENDERO DEL MIRADOR DEL FITZ ROY",
      "Un sendero panorámico que ofrece vistas impresionantes del famoso Cerro Fitz Roy en Santa Cruz.",
      "SANTA CRUZ",
      "MODERADO",
      14,
      6,
      589
    ),
    new SenderoArgentina(
      8,
      "SENDERO DEL VOLCÁN LANÍN",
      "Un desafiante sendero que te lleva a la cumbre del imponente Volcán Lanín en la provincia de Neuquén.",
      "NEUQUÉN",
      "DIFÍCIL",
      18,
      9,
      834
    ),
    new SenderoArgentina(
      9,
      "SENDERO DE LA QUEBRADA DE LAS CONCHAS",
      "Un espectacular sendero que recorre formaciones rocosas únicas en la Quebrada de las Conchas, Salta.",
      "SALTA",
      "MODERADO",
      12,
      5,
      638
    ),
    new SenderoArgentina(
      10,
      "SENDERO DE LOS GLACIARES",
      "Un increíble sendero que te permite acercarte a impresionantes glaciares en el Parque Nacional Los Glaciares.",
      "SANTA CRUZ",
      "MODERADO",
      10,
      4,
      721
    ),
    new SenderoArgentina(
      11,
      "SENDERO DEL CERRO LOPEZ",
      "Un hermoso sendero que te lleva a lo largo de la ladera del Cerro López, ofreciendo vistas panorámicas de la región.",
      "RIO NEGRO",
      "MODERADO",
      10,
      4,
      753
    ),
    new SenderoArgentina(
      12,
      "SENDERO DEL CERRO TORRE",
      "Un desafiante sendero que conduce a la base del impresionante Cerro Torre, conocido por su belleza y dificultad.",
      "SANTA CRUZ",
      "Difícil",
      15,
      8,
      889
    ),
    
];




// Asociar divs de cada card a los objetos del array

const cards = document.querySelectorAll('.card')

cards.forEach(card =>{
  const id = card.dataset.id;
  const sendero = senderosArgentina.find(obj => obj.id.toString() === id);
  if(sendero){
  card.textContent = sendero.contenido
  
}
})



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
  const minimoDistancia = parseInt(document.getElementById('min-distancia').value);
  const maximoDistancia = parseInt(document.getElementById('max-distancia').value);
  const minimoDuracion = parseInt(document.getElementById('min-duracion').value);
  const maximoDuracion = parseInt(document.getElementById('max-duracion').value);
  const minimoDesnivel = parseInt(document.getElementById('min-desnivel').value);
  const maximoDesnivel = parseInt(document.getElementById('max-desnivel').value);

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
    return (provinciaCheckboxes.length === 0 || provinciaCheckboxes.includes(senderoArgentina.provincia)) && 
    (dificultad === '' || senderoArgentina.dificultad === dificultad) && (senderoArgentina.minimoDistancia) && (senderoArgentina.maximoDistancia) && (senderoArgentina.minimoDuracion) && (senderoArgentina.maximoDuracion) && (senderoArgentina.minimoDesnivel) && (senderoArgentina.maximoDesnivel);
  });  

  

}

// Evento del botón Buscar (ejecución de la función)

let btn = document.getElementById('btnBuscar');

btn.addEventListener('click', ()=> {
  filtrarSenderos();
})







