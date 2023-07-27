
class SenderoArgentina {
    constructor(nombre, descripcion, provincia, dificultad, distancia, duracion, desnivel) {
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
      "SENDERO DE LOS ARRAYANES",
      "Un encantador sendero rodeado de bosques de arrayanes en el Parque Nacional Los Arrayanes.",
      "NEUQUÉN",
      "MODERADO",
      8,
      3,
      792
    ),
    new SenderoArgentina(
      "SENDERO DEL CERRO URITORCO",
      "Un desafiante sendero que te lleva a la cima del Cerro Uritorco, la montaña más alta de Córdoba.",
      "CÓRDOBA",
      "DIFÍCIL",
      12,
      6,
      872
    ),
    new SenderoArgentina(
      "SENDERO DE LA LAGUNA ESMERALDA",
      "Un pintoresco sendero que conduce a una hermosa laguna de color esmeralda en Tierra del Fuego.",
      "TIERRA DEL FUEGO",
      "MODERADO",
      10,
      4,
      720
    ),
    new SenderoArgentina(
      "SENDERO DEL ACONCAGUA",
      "Un desafiante sendero que lleva a los aventureros a la base del majestuoso Aconcagua, la montaña más alta de América.",
      "MENDOZA",
      "DIFÍCIL",
      20,
      10,
      880
    ),
    new SenderoArgentina(
      "SENDERO DE LA QUEBRADA DE HUMAHUACA",
      "Un sendero histórico que recorre paisajes impresionantes y sitios arqueológicos en la Quebrada de Humahuaca.",
      "JUJUY",
      "MODERADO",
      15,
      8,
      652
    ),
    new SenderoArgentina(
      "SENDERO DE LAS SIETE CASCADAS",
      "Un relajante sendero que pasa por siete hermosas cascadas en la provincia de Misiones.",
      "MISIONES",
      "FÁCIL",
      6,
      2,
      253
    ),
    new SenderoArgentina(
      "SENDERO DEL MIRADOR DEL FITZ ROY",
      "Un sendero panorámico que ofrece vistas impresionantes del famoso Cerro Fitz Roy en Santa Cruz.",
      "SANTA CRUZ",
      "MODERADO",
      14,
      6,
      589
    ),
    new SenderoArgentina(
      "SENDERO DEL VOLCÁN LANÍN",
      "Un desafiante sendero que te lleva a la cumbre del imponente Volcán Lanín en la provincia de Neuquén.",
      "NEUQUÉN",
      "DIFÍCIL",
      18,
      9,
      834
    ),
    new SenderoArgentina(
      "SENDERO DE LA QUEBRADA DE LAS CONCHAS",
      "Un espectacular sendero que recorre formaciones rocosas únicas en la Quebrada de las Conchas, Salta.",
      "SALTA",
      "MODERADO",
      12,
      5,
      638
    ),
    new SenderoArgentina(
      "SENDERO DE LOS GLACIARES",
      "Un increíble sendero que te permite acercarte a impresionantes glaciares en el Parque Nacional Los Glaciares.",
      "SANTA CRUZ",
      "MODERADO",
      10,
      4,
      721
    ),
    
];
  

let nombre = prompt("Filtrar por nombre de la ruta").toUpperCase();
let provincia = prompt("Filtrar por provincia").toUpperCase();
let dificultad = prompt("Filtrar por dificultad (fácil/moderado/difícil)").toUpperCase();
let minimoDistancia = Number(prompt("Filtrar por distancia mínima(en km)"));
let maximoDistancia = Number(prompt("Filtrar por distancia máxima(en km)"));
let minimoDuracion = Number(prompt("Filtrar por duración mínima(en hs)"));
let maximoDuracion = Number(prompt("Filtrar por duración máxima(en hs)"));
let minimoDesnivel = Number(prompt("Filtrar por desnivel mínimo(en metros)"));
let maximoDesnivel = Number(prompt("Filtrar por desnivel máximo(en metros)"))


const datosDeBusqueda = {
    nombre: nombre,
    provincia: provincia,
    dificultad: dificultad,
    minimoDistancia: minimoDistancia,
    maximoDistancia: maximoDistancia,
    minimoDuracion: minimoDuracion,
    maximoDuracion: maximoDuracion,
}


function mostrarSenderosArgentina(senderosArgentina){
    senderosArgentina.forEach ( (SenderoArgentina) =>{
        alert(`Los senderos más adecuados para usted son: Nombre: ${SenderoArgentina.nombre} - Descripción: ${SenderoArgentina.descripcion} - Provincia: ${SenderoArgentina.provincia} - Dificultad: ${SenderoArgentina.dificultad} - Distancia(kms): ${SenderoArgentina.distancia} - Duración(hs): ${SenderoArgentina.duracion} - Desnivel(mts): ${SenderoArgentina.desnivel}`)
    })
}


function filtrarSendero(){
    const resultado = senderosArgentina.filter(filtrarNombre).filter(filtrarProvincia).filter(filtrarDificultad).filter(filtrarMinimoDistancia).filter(filtrarMaximoDistancia).filter(filtrarMinimoDuracion).filter(filtrarMaximoDuracion).filter(filtrarMinimoDesnivel).filter(filtrarMaximoDesnivel);
    if (resultado.length){
        mostrarSenderosArgentina(resultado)
    }else{
        alert("Su búsqueda no coincide con ningún resultado")
    }
    
}


function filtrarNombre(SenderoArgentina){
    if (datosDeBusqueda.nombre){
        return SenderoArgentina.nombre === datosDeBusqueda.nombre
    }
    return SenderoArgentina;
    
}

function filtrarProvincia(SenderoArgentina){
    if (datosDeBusqueda.provincia){
        return SenderoArgentina.provincia === datosDeBusqueda.provincia
    }
    return SenderoArgentina;
}

function filtrarDificultad(SenderoArgentina){
    if (datosDeBusqueda.dificultad){
        return SenderoArgentina.dificultad === datosDeBusqueda.dificultad
    }
    return SenderoArgentina;
}

function filtrarMinimoDistancia(SenderoArgentina){
    if (datosDeBusqueda.minimoDistancia){
        return SenderoArgentina.distancia >= datosDeBusqueda.minimoDistancia
    }
    return SenderoArgentina;
}

function filtrarMaximoDistancia(SenderoArgentina){
    if (datosDeBusqueda.maximoDistancia){
        return SenderoArgentina.distancia <= datosDeBusqueda.maximoDistancia
    }
    return SenderoArgentina;
}

function filtrarMinimoDuracion(SenderoArgentina){
    if (datosDeBusqueda.minimoDuracion){
        return SenderoArgentina.duracion >= datosDeBusqueda.minimoDuracion
    }
    return SenderoArgentina;
}

function filtrarMaximoDuracion(SenderoArgentina){
    if (datosDeBusqueda.maximoDuracion){
        return SenderoArgentina.duracion <= datosDeBusqueda.maximoDuracion
    }
    return SenderoArgentina;
}

function filtrarMinimoDesnivel(SenderoArgentina){
    if (datosDeBusqueda.minimoDesnivel){
        return SenderoArgentina.desnivel >= datosDeBusqueda.minimoDesnivel
    }
    return SenderoArgentina;
}

function filtrarMaximoDesnivel(SenderoArgentina){
    if (datosDeBusqueda.maximoDesnivel){
        return SenderoArgentina.desnivel <= datosDeBusqueda.maximoDesnivel
    }
    return SenderoArgentina;
}

filtrarSendero()