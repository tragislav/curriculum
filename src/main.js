"use strict";

let demojsonstringify = {
    name: "Stanislav",
    surname: "Dykomenko",
    age: 27,
    birthday: {
        day: 19,
        month: "July",
        year: 2000
    }
};

let demojsonparse = '{"name":"Stanislav","surname":"Dykomenko","age":27,"birthday":{"day":19,"month":"July","year":2000}}';

console.log(JSON.stringify(demojsonstringify));
console.log("_______________");
console.log(JSON.parse(demojsonparse));

$(document).on('click', '#btn', function () {
    var formData = new FormData();
    formData.append("myFile", document.getElementById("file").files[0], 'chris1.jpg');

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "index.html");
    xhr.send(formData);
});