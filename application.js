// let numbers = [1, 3, 4, 7, 2, 1, 9, 0, 18, 32]

// // [2, 6, 8, 14, 4, 2, 18, 0]

// let multiply = function(numbers) {
//   let arregloFinal = [];

//   for (let i = 0; i < numbers.length; i++) {
//     arregloFinal.push(numbers[i] * 2)
//   }

//   return arregloFinal;
// }

// const operacionFinal = multiply(numbers)
// console.log(operacionFinal);


// const ages = [25, 40, 35, 34, 26, 18, 17, 65, 59]

// let average = function(ages) {
//   let suma = 0;

//   for (let i = 0; i < ages.length; i++) {
//     suma += ages[i];
//   }

//   return suma / ages.length
// }


// console.log('este es el resultado:', average(ages));


// let car = {
//   brand: 'Nissan',
//   model: 'Versa',
//   year: 2021,
//   versiones: ['xl', 'xls', 'lg']
// };

// function keyValuePairs(data) {
//   let keys = Object.keys(data);
//   let pairs = [];

//   for (i = 0; i < keys.length; i++) {
//     pairs.push([keys[i], data[keys[i]]])
//   }

//   return pairs
// };

// console.log(keyValuePairs(car));



// let object = keyValuePairs;

// function turnIntoObject(data) {
//   object = {};

//   for (i = 0; i < keys.length; i++) {
//     let object. = data[]
//   }

// };


singers = [
{ name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
{ name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
{ name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
{ name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function getFields(object, fieldOfInterest) {
    var resultado = [];
    for (var i=0; i < object.length ; ++i)
        resultado.push(object[i][fieldOfInterest]);
    return resultado;
}

name = 'band'
console.log(getFields(singers,name));






