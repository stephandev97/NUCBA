//LISTA COMPRAS
let supermarketList = [
    "Harina",
    "Azucar",
    "Sal",
    "Queso",
    "Carne",
    "Fideos",
    "Arroz",
    "Galletitas",
    "Yerba",
    "Lavandina",
]

//1
console.log('Primero tengo que comprar' + ' ' + supermarketList[0])
//2
console.log('Tengo que comprar último' + ' ' + supermarketList[supermarketList.length - 1]);
//3
console.log('Tengo que comprar ' + supermarketList.length + ' productos');

//USERNAME
let user = {
    Username: "emifrndz",
    Name: "Stephan",
    Age: 25,
    Hobbies: [
        " videojuegos",
        " pizza",
        " futbol",
    ],
    City: "Marcos Paz",
    Student: true,
}
//1
console.log('Mi username es ' + user.Username);
//2
console.log('Mi nombre es ' + user.Name);
//3
console.log('Tengo ' + user.Age);
//4
console.log('Tengo ' + user.Hobbies.length + ' hobbies y son los' + user.Hobbies);
//5
function isStudent(array) {
    let student = array.Student;

    if (student == true) {
        return 'Si, soy estudiante';
    } else {
        return 'No, no estoy estudiando'
    }
}

console.log(isStudent(user));
//6
console.log('Soy de ' + user.City):

