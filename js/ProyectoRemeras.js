let compra = parseInt(prompt("Ingrese El id de la remera que desea comprar \n1) ReactJs $1200 \n2) Js $3000\n3) Git $2500\n4) Html $2500\n0 Para terminar la compra"))

let gracias = "gracias por elegirnos"

let stockRemeras = [
    {id: 1, nombre: "React", tipo: "remera", precio: 1200, talle: "L"},
    {id: 2, nombre: "Js", tipo: "remera", precio: 3000, talle: "L"},
    {id: 3, nombre: "Git", tipo: "remera", precio: 2500, talle: "M"},
    {id: 4, nombre: "Html", tipo: "remera", precio: 2500, talle: "M"},
]
let carritoDeCompras = []

document.getElementById("precio1").innerHTML = stockRemeras[0].precio
document.getElementById("precio2").innerHTML = stockRemeras[1].precio
document.getElementById("precio3").innerHTML = stockRemeras[2].precio
document.getElementById("precio4").innerHTML = stockRemeras[3].precio


while(compra != "0"){ 

    function agregarAlCarrito() {

        let productoAgregar = stockRemeras.filter((el) => el.id == compra)[0]
        carritoDeCompras.push(productoAgregar)
         console.log(carritoDeCompras)
        actualizarCarrito()
        
    }
    agregarAlCarrito()

    function actualizarCarrito() {
    alert("cantidad de productos: " + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    alert("La suma total de su Carrito es: $" + suma)
    }
    
 
    compra = parseInt(prompt("Ingrese El id de la remera que desea comprar \n1) ReactJs $1200 \n2) Js $3000\n3) Git $2500\n4) Html $2500\n0 Para terminar la compra"))
}
document.getElementById("totalp").innerHTML = gracias
