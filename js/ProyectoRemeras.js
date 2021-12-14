class Remeras {
    constructor(talle, cantidad) {

        this.talle = talle;
        this.cantidad = cantidad;
    }

    aumentarCarrito(nuevoCarrito){
        this.carrito += nuevoCarrito
    }
}



let remeras = []

let formProducto = document.getElementById('formProducto')
let botonCarrito = document.getElementById('botonCarrito')
let divProductos = document.getElementById('divProductos')

formProducto.addEventListener('submit', (e) => {
    e.preventDefault()
    
    
    let datForm = new FormData(e.target)
    let nuevoProducto = new Remeras(datForm.get("talle"), datForm.get("cantidad"))
    
    remeras.push(nuevoProducto)
    localStorage.setItem('keyRemeras', JSON.stringify(remeras))
    formProducto.reset()


})

botonCarrito.addEventListener('.click', () =>{
    let productosEnStorage = JSON.parase(localStorage.getItem('keyRemeras'))
    console.log(productosEnStorage)
})
