//Apertura objetos

const nombre = "tablet"
const precio = 300
const disponible = true

const producto = {
    Nombre : "Tablet 9\"",
    Marca : "Lenovo",
    Modelo : "IdeaPAd",
    Costo_Compra : 300,
    Costo_Venta : 3200,
    Disponible : true,
    SKU: Symbol("3LP3P3"),
    Colores : ["Blanco","Negro","Rosa","Azul","Amarillo"]
}

//Imprimir el objeto
console.warn("--- Objetos ---")
console.log(producto.Modelo)

//Los objetos tambien pueden representarse en tabla, usando la funcion console.table
console.table(producto)

//Acceder a las propiedades de un objeto
console.warn("--- Leyendo las propiedades de un objeto y sus tipos de dato ---")
    console.log(`Nombre del producto: ${producto.Nombre} que es del tipo: ${typeof(producto.Nombre)}`)
    console.log(`Marca del producto: ${producto.Marca} que es del tipo: ${typeof(producto.Marca)}`)
    console.log(`Modelo del producto: ${producto.Modelo} que es del tipo: ${typeof(producto.Modelo)}`)
    console.log(`Costo de compra del producto: ${producto.Costo_Venta} que es del tipo: ${typeof(producto.Costo_Compra)}`)
    console.log(`Costo de venta del producto: ${producto.Costo_Venta} que es del tipo: ${typeof(producto.Costo_Venta)}`)
    console.log(`Disponibilidad del producto: ${producto.Disponible} que es del tipo: ${typeof(producto.Disponible)}`)
    console.log(`SKU del producto: ${producto.SKU} que es del tipo: ${typeof(producto.SKU)}`)
    console.log(`Colores del producto: ${producto.Colores} que es del tipo: ${typeof(producto.Colores)}`)

