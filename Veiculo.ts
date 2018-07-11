export default class Veiculo {
    //Atributos
    protected modelo!: String
    protected velocidade: number = 0

    //Metodos
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}
