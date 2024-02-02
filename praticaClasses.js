// Você precisa criar as classes Funcionario, Gerente e Desenvolvedor.
// A classe Funcionario deve ter os atributos nome, idade e cargo, 
// além dos métodos seApresentar() e trabalhar().
// A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento,
//  além do método gerenciar().Já a classe Desenvolvedor deve herdar da classe 
//  Funcionario e ter um atributo adicional linguagem, além do método programar().

// Depois de implementar as classes, crie instâncias de um gerente e de um 
// desenvolvedor, definindo valores para seus atributos.Em seguida, 
// chame os métodos apropriados para cada um dos funcionários, 
// exibindo as saídas corretas no console.

class Funcionario {
    constructor(nome, idade, cargo){
        this.nome = nome,
        this.idade = idade,
        this.cargo = cargo
    }

    seApresentar(){
        console.log(`Nome do funcionário é: ${this.nome} e tem ${this.idade} anos`)
    }

    trabalhar() {
        console.log(`Cargo do funcionário: ${this.cargo}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento){
        super(nome,idade,cargo),
        this.departamento = departamento
    }

    gerenciar(){
        console.log(`${this.nome} está gerenciando`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem){
        super(nome,idade,cargo),
        this.linguagem = linguagem
    }   

    programar(){
        console.log(`${this.nome} está programando`)
    }
}

const gerente1 = new Gerente("Carlos","40","Gerente","Compras")
gerente1.seApresentar()
gerente1.trabalhar()
gerente1.gerenciar()

const dev1 = new Desenvolvedor("João","32","Dev","JavaScript")
dev1.seApresentar()
dev1.trabalhar()
dev1.programar()