"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var carro = new Carro_1.default('veloster', 3);
carro.acelerar();
carro.acelerar();
var moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
console.log(moto);
console.log(carro);
