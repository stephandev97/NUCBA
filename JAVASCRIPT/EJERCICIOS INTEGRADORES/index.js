//NOMBRE Y OPERACIONES

//var name = window.prompt("What's your name?");
//alert(`Your name is ${name}!`);


//var secondNumber = 10;
//var numberFirst = window.prompt("Write a number");
//secondNumber = parseInt(secondNumber) + parseInt(numberFirst);
//alert(secondNumber);


//var number = window.prompt("Write a number");
//var number2 = window.prompt("Write a second number")
//alert(parseInt(number) + parseInt(number2));

//----------------------------------------------------------------

//CALCULADORA

//var valor1 = prompt("Ingrese un valor");
//valor1 = parseInt(valor1)

//var valor2 = prompt("Ingrese otro valor");
//valor2 = parseInt(valor2);

//var suma = valor1 + valor2;
//alert("La suma es " + suma);

//var resta = valor1 - valor2;
//alert("La resta es " + resta);

//var multiplicar = valor1 * valor2;
//alert("La multiplicacion es " + multiplicar);

//var dividir = valor1 / valor2;
//alert("La division es " + dividir);

//----------------------------------------------------------------

//DIA DE LA SEMANA

const diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
const diaHabil = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
const finDeSemana = ["Sabado", "Domingo"];
//const findDay = () => {
//let message = "Hoy es"
//let day = diasDeLaSemana.find(element => element === "Sabado" || element === "Domingo");
//return console.log(`${message} ${day}`);};
//findDay();

//const windowDay = window.prompt("Ingresa un dia");

//for(var i = 0; i < diasDeLaSemana.length; i++) {

//for(var j = 0; j < diaHabil.length; j++) {
//for(var k = 0; k < finDeSemana.length; k++) {
//if(diaHabil[j] === windowDay){
//console.log("El día es hábil");
//break;
//} else if (finDeSemana[k] == windowDay){
//    console.log("El día es fin de semana");
//break;
//}
// }
// }
//}

function nameSurname(name, surname) {
    console.log(`Tu nombre es ${name} ${surname}`);
}
//nameSurname("Stephan", "Fernandez");

function daysOption(valor) {
    if (valor == "Dias de la semana") {
        console.log(diaHabil);
    } else if ("Fin de semana") {
        console.log(finDeSemana);
    }
}

//daysOption("Dias de la semana");


const movies = [{ ID: 3, Titulo: "El Padrino" }, { ID: 2, Titulo: "Avatar" }]

function addMovie(numberID, Titulo) {
    let obj = {};
    obj['ID'] = numberID;
    obj['Titulo'] = Titulo;

    if (movies.filter(e => e.ID === numberID).length > 0) {
        console.log('No esta disponible el ID');
    } else {
        movies.push(obj);
    }
}
//addMovie(7, "Busqueda Implacable");

function ordenarMoviesID(){
    //Ordenado por ID
    movies.sort(((a,b) => a.ID - b.ID));
    console.log('Ordenado por ID:');
    console.log(movies);
}

//ordenarMoviesID();

function ordenarMoviesTitulo(){
    movies.sort(((a,b) => a.Titulo.localeCompare(b.Titulo)));
    console.log('Ordenado por Titulo:');
    console.log(movies);
}

//ordenarMoviesTitulo();

function restar(num1,num2){
    return num1 - num2;
}

function dividir(num1,num2){
    return num1 / num2;
}

function sumar(num1,num2){
    return num1 + num2;
}

function multiplicar(num1,num2){
    return num1 * num2;
}

function calculadora(valor1,valor2,operacion){
    console.log(operacion(valor1,valor2));
}

//calculadora(4,2,sumar);
//calculadora(4,2,restar);
//calculadora(4,2,multiplicar);
//calculadora(4,2,dividir);

const auto = {
    color: "negro",
    modelo: 2021,
    patente: "KGV1997",
    marca: "Peugeot",
    prendido: "",
    velocidad: 100,
    velocidadmaxima: 180,
}

auto.encender = function() {
    auto.prendido = "encendido";
    console.log(auto.prendido);
}
//auto.encender();

auto.apagar = function() {
    auto.prendido = "apagado";
    console.log(auto.prendido);
}
//auto.apagar();

auto.acelerar = function() {
    for (var i = auto.velocidad; i < auto.velocidadmaxima + 1; i++) {
        console.log(i);
    }
}
//auto.acelerar();

auto.frenar = function() {
    auto.velocidad = 0;
    console.log(auto.velocidad);
}

//auto.frenar();

auto.mostrarvelocidad = function() {
    console.log(auto.velocidad);
}
//auto.mostrarvelocidad();


