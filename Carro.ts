import Veiculo from './Veiculo'

export default class Carro  extends Veiculo {
    //Atributos
    private numeroDePortas: number 

    constructor(modelo: string, numeroDePortas: number ) {
       super()
       this.modelo = modelo
       this.numeroDePortas = numeroDePortas
    }
}
