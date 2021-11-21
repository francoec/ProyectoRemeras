let compra = parseInt(prompt("Ingrese El id de la remera que desea comprar \n1) ReactJs $1200 \n2) Js $3000\n3) Git $2500\n4) Html $2500\n0 Para terminar la compra"))


let stockRemeras = [
    {id: 1, nombre: "React", tipo: "remera", precio: 1200, talle: "L"},
    {id: 2, nombre: "Js", tipo: "remera", precio: 3000, talle: "L"},
    {id: 3, nombre: "Git", tipo: "remera", precio: 2500, talle: "M"},
    {id: 4, nombre: "Html", tipo: "remera", precio: 2500, talle: "M"},
]
let carritoDeCompras = []

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
