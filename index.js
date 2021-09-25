class Colaborador {
  constructor(nome, cpf, valorDia, diasTrabalhados) {
    this.nome = nome;
    this.cpf = cpf;
    this.valorDia = valorDia;
    this.diasTrabalhados = diasTrabalhados;
  }
  
  dadosCompletos() {
    return `${this.nome} , cpf: ${this.cpf} , `;
  }

  salario() {
    return (this.valorDia) * (this.diasTrabalhados);
  }
}

let colaborador1 = new Colaborador("Joao da Silva", "11111111111", 20.0, 15);

alert("O colaborador " + colaborador1.dadosCompletos() + "irá receber de salário " + colaborador1.salario() + " reais.");