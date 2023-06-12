import * as wasm from "archi-client";

wasm.initialise();

var canvas = document.getElementById('archi_canvas');
var width = canvas.width;
var height = canvas.height;
console.log(`Width = ${width}  Height = ${height}`)

document.getElementById('details_frame').setAttribute("src","public/service2.html");