//Ejercicio 1: Declaracion de variables

// a) Var nunca cambia
var myName = "Mauricio"
var mySecondName
var myAge = 19

//El objeto console.log nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funcion 
console.warn("%c----- Declaracion de variables usando: VAR------",  'color: white; background-color: green; font-size: 16px; padding: 5px; border: 1px solid black;')
console.log("Intentando leer las variables: ", myName, mySecondName)

mySecondName = "Rosales Gabriel"
console.log("Ya que ambas fueron inicializadas vuelve a intentar leerlas: ",myName, mySecondName)
//una variable ´puede cambiar en el proceso de ejecucion del programa

// b) const puede cambiar la variable en la ejecucion del programa
console.warn("%c----- Declaracion de variables usando: CONST -----", 'color: white; background-color: green; font-size: 16px; padding: 5px; border: 1px solid black;')
const myUniversity = "UT Xicotepec"
const myStudentCode = 220859

console.log("Hola, ", myName, " ",mySecondName, " se que estudias actualmente en ", myUniversity, " asignaron la matricula: ", myStudentCode, " y tienes una edad de: ", myAge, " edad")

//Para saber el tipo de dato que tiene una variable

console.log("Analizando los datos puedo deducir que: ")
console.log("myName es del tipo", typeof(myName))
console.log("mySecondName es del tipo", typeof(mySecondName))
console.log("myUniversity es del tipo", typeof(myUniversity))
console.log("myAge es de tipo", typeof(myAge))
console.log("myStudentCode es de tipo", typeof(myStudentCode))

// c) let 
let myBirthDay = "2004-09-25"
let myFavoriteColor

console.warn("%c------- Declaracion de variable locales usando: LET", 'color: white; background-color: green; font-size: 16px; padding: 5px; border: 1px solid black;')
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el: ", myBirthDay, " y tu color favorito es: mmmm... dejame adivinar...")

myFavoriteColor = "Rojo";
console.log(`Creo que es ${myFavoriteColor}, le atine`)//La manera de mezclar textos fijos con el valor actual de las variables de le conoce como: Interpolacion

console.log("Analizando los datos puedo deducir que: ")
console.log("myBirthDay es del tipo", typeof(myBirthDay))
console.log("myFavoriteColor es del tipo", typeof(myFavoriteColor))

