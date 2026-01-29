let carrito = [];

function agregarAlCarrito(nombre, precio) {

  if (!nombre  || !precio ) {
    mostrarAdvertencia("No hay ningún producto seleccionado");
    return;
  }

  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function mostrarAdvertencia(texto){
  const mensaje = document.getElementById("mensaje-error");

  mensaje.innerText = texto;
  mensaje.classList.add("mostrar");

  setTimeout(() => {
    mensaje.classList.remove("mostrar");
  }, 2000); // visible 2 segundos
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalEl = document.getElementById("total");
    lista.innerHTML = "";
    


    let total = 0;
    carrito.forEach((item, index) => {
        total += item.precio;
        lista.innerHTML += `
            <div class="item-carrito">
                <span>${item.nombre}</span>
                <span>$${item.precio}.00</span>
                <button onclick="eliminarItem(${index})" style="background:none;border:none;color:red;cursor:pointer;">✖</button>
            </div>
        `;
    });

    totalEl.textContent = `Total: $${total}.00 MXN`;
}

function eliminarItem(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function toggleCarrito() {
    document.getElementById("carrito").classList.toggle("abierto");
}


function comprar() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    // Crear mensaje para WhatsApp
    let mensaje = " *Pedido*\n\n ";
    let total = 0;

    carrito.forEach(item => {
        mensaje += `• ${item.nombre} — $${item.precio}.00 MXN\n`;
        total += item.precio;
    });

    mensaje += `\n *Total:* $${total}.00 MXN`;
    mensaje += `\n\n Nombre:  `;


    // Enviar a WhatsApp
    const numero = "+52 823 109 4576" //"+52 1 823 110 7126"; // +52 826 169 71 82
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    // Limpiar carrito
    carrito = [];
    actualizarCarrito();

    // Mostrar mensaje de confirmación
    const mensajeCompra = document.getElementById("mensaje-compra");
    mensajeCompra.style.display = "block";
    setTimeout(() => mensajeCompra.style.display = "none", 2500);
}
