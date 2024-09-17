const producto = {
    nombre: "tablet",
    precio: 200,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

const {nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

const autenticado = true
const usuario = "juan"

const nueboObject = {
    autenticado: autenticado,
    usuario: usuario
}

console.table(nueboObject)

