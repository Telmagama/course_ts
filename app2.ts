import { Carro } from './Carro'
import { Concessionaria } from './Concessionaria'
import { Pessoa } from './Pessoa'

/* --- Criar carros --- */ 
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3) 
let carroC = new Carro('cerato', 4)

/* --- Montar a lista de carros da concessionaria --- */
let listaDeCarros:  Carro[] = [carroA,carroB,carroC]

let concessionaria = new Concessionaria('Rua da avenida', listaDeCarros)
 
/* --- comprar o carro ---  */
let cliente = new Pessoa('Joao','veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        // compra o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())

