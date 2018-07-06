export class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listadeCarros
    }

    public fornecerEndereco(): string {
     return this.endereco
    }

  public mostrarListaDeCarros(): Array<Carro> {
      return this.listaDeCarros
    }
}