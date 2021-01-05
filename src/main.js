"use strict";

let demojsonstringify = {
    name: "Stanislav",
    surname: "Dykomenko",
    age: 20,
    birthday: {
        day: 19,
        month: "July",
        year: 2000
    }
}

let demojsonparse = '{"name":"Stanislav","surname":"Dykomenko","age":27,"birthday":{"day":19,"month":"July","year":2000}}';

console.log(JSON.stringify(demojsonstringify));
console.log("_______________");
console.log(JSON.parse(demojsonparse));
