//Tiposd de datos en JS

//1.- UNDEFINED
//¿Para que sirve UNDEFINED? Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas
console.warn("%c----- Tipo de Dato UNDEFINED ------",  'color: white; background-color: red; font-size: 16px; padding: 5px; border: 1px solid black;')
let client
console.log(`El cliente es: ${client}`)
console.log(`El tipo de dato de la variable client es: ${typeof(client)}`)

client = "Solin"
console.log(`El cliente es: ${client}`)
console.log(`El tipo de dato de la variable client es: ${typeof(client)}`)

client = 220859
console.log(`El cliente es: ${client}`)
console.log(`El tipo de dato de la variable client es: ${typeof(client)}`)

//2.- Boolean
console.warn("%c----- Tipo de Dato BOOLEAN (Boleano - True/False) ------",  'color: white; background-color: red; font-size: 16px; padding: 5px; border: 1px solid black;')
let isPremium = "No lo se"
console.log(`¿Es clienete es Premium? : ${isPremium}`)

console.log(`La variable isPremium es de tipo ${typeof(isPremium)}`)
isPremium = 1
console.log(`La variable isPremium es de tipo ${typeof(isPremium)}`)

console.log(`¿Es clienete es Premium? : ${isPremium}`)
if(isPremium)
    console.log("El cliente pago por usar el servivio")
else
    console.log("El cliente recibe los servicios gratuitos")

//3.- Number
console.warn("%c----- Tipo de Dato : Number (Numeros, positivos, negativos, decimales, flotantes) ------",  'color: white; background-color: red; font-size: 16px; padding: 5px; border: 1px solid black;')
var quanty
const productCost = 10.50
let accountBalance = 2500.40
let transactionAmount 

console.log(`Tu saldo al dia de hoy es de: ${accountBalance}, (Tipo de Dato = ${typeof(accountBalance)})`)
console.log(`El producto que has seleccionado cuesta: ${productCost}`)
quanty = 8;
console.log(`Has elegido comprar: ${quanty} de productos`)
console.log(`El importe total de compra es: ${(quanty * productCost)}`)
transactionAmount = (quanty * productCost)
accountBalance = accountBalance - (transactionAmount)
console.log(`Tu nuevo saldo es de: ${accountBalance}`)

//El cliente realiza un abono de 1500

transactionAmount = 1500
console.log(`Tu abono de : ${transactionAmount} ah sido recivido, tu nuevo saldo es de: ${(accountBalance + transactionAmount)}`)


