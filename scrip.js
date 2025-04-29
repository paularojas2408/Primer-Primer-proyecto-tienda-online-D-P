const carrito = document .getElementById(´carrito´);
const elementos1 = document.getElementById(´lista-1´);
const lista = document.querySelector(´#lista-carrito tbody´);
const vaciarcarritoBtn = document. getElementById(´vaciar-carrito´)

cargarEventListeners();

function cargarEventListeners() {

    elementos1. addEventListener(´click´, comprarElemento);
    carrito.addEventListener(´click´, eliminarElemento)
    vaciarcarritoBtn.addEventListener(´click´, vaciarCarrito);

}

 function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains(´ agregar-carrito´)) {
        const elemnto = e.target.parentElement.parentElement;
        leerDatosElemento(elemnto);
    }
 }

function leerDatosElemento(elemnto) {
    const infoEelemento = {
        imagen: elemento.querySelector(´img´).src
        titulo: elemento.querySelector(´h3´).textContent,
        precio: elemento.querySelector(´.precio´).textContent,
        id: elemento.querySelector(´a´).getAtribute(´data-id´)
    }
    insertarCarrito(infoEelemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement(´tr´)
    row.inneHTML = `
      <td>
        <img src="${elemento.imagen}" width=100 />
      </td>
      <td>
        ${elemento.titulo}
      </td>
      <td>
        ${elemnto.precio}
      </td>
      <td>
       <a herf= "#" class="borrar" data-id="${elemento.id}">X </a>
      </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elemntoid;
    if(e.target.classList.contains(´borrar´)) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement;
        elemntoid = elemento.querySelector(´a´).getAtribute(´data-id´);
    }       
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;

}


