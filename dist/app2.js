"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/* --- Criar carros --- */
var carroA = new Carro_1.Carro('dodge journey', 4);
var carroB = new Carro_1.Carro('veloster', 3);
var carroC = new Carro_1.Carro('cerato', 4);
/* --- Montar a lista de carros da concessionaria --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Rua da avenida', listaDeCarros);
/* --- comprar o carro ---  */
var cliente = new Pessoa_1.Pessoa('Joao', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
