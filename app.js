document.querySelectorAll('.cards').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block'
            ? 'none'
            : 'block';
    });
});

document.getElementById('search').addEventListener('input', function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll('.card').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(value)
            ? 'block'
            : 'none';
    });
});

const toggle = document.querySelector('.toggle-options');
const options = document.querySelector('.options');

toggle.addEventListener('click', ()=>{
  const abierto = options.style.display === 'block';
  options.style.display = abierto ? 'none' : 'block';
  toggle.textContent = abierto ? '+' : '−';
});

let productoSeleccionado = {
    nombre: null,
    precio: null
}

function seleccionarRefresco(img, nombre, precio){
  document.getElementById('img-refresco').src = img;
  document.getElementById('nombre-refresco').innerText = nombre;
  document.getElementById('precio-refresco').innerText = `$${precio}.00`;

  // Guardamos el producto activo
  productoSeleccionado.nombre = nombre;
  productoSeleccionado.precio = precio;

}

function agregarSeleccionAlCarrito(){
  agregarAlCarrito(
    productoSeleccionado.nombre,
    productoSeleccionado.precio
  );
}

function mostrarAdvertencia(texto){
  const mensaje = document.getElementById("mensaje-error");

  mensaje.innerText = texto;
  mensaje.classList.add("mostrar");

  setTimeout(() => {
    mensaje.classList.remove("mostrar");
  }, 2000); // visible 2 segundos
}
