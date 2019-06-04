const EventEmitter = require("events");

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

meuEmissor.on(nomeEvento, function(click) {
  console.log("um usuario clicou", click);
});
// meuEmissor.emit(nomeEvento, 'na barra de rolag
// meuEmissor.emit(nomeEvento, 'no ok')
// let count = 0
// setInterval(function () {
//     meuEmissor.emit(nomeEvento, 'no ok' + (cou
// }, 1000)

const stdin = process.openStdin();
stdin.addListener("data", function(value) {
  console.log(`Voce digitou: ${value.toString().trim()}`);
});

//PROMISE SÓ EXECUTA UMA VEZ
// function main() {
//   return new Promise(function(resolve, reject) {
//     stdin.addListener("data", function(value) {
//       // console.log(`Voce digitou: ${value.toString().trim()}`)
//       return resolve(value);
//     });
//   });
// }
// main().then(function(resultado) {
//   console.log("resultado", resultado.toString());
// });
