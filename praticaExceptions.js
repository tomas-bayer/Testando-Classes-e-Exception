class Funcionario {
    constructor(nome, idade, cargo){
        this.nome = nome,
        this.idade = idade,
        this.cargo = cargo
    }

    seApresentar(){
        return (`Nome do funcionário é: ${this.nome} e tem ${this.idade} anos`)
    }

    trabalhar() {
        return (`Cargo do funcionário: ${this.cargo}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento){
        super(nome,idade,cargo),
        this.departamento = departamento
    }

    gerenciar(){
        return (`${this.nome} está gerenciando no setor ${this.cargo}`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem){
        super(nome,idade,cargo),
        this.linguagem = linguagem
    }   

    programar(){
        return (`${this.nome} está programando em ${this.linguagem}`)
    }
}


//mostra o formulário para preenchimento dos valores da classe, de aconrdo com o funcionário selecionado

function mostraForm(formId) {

    limpaValores()

    document.querySelector(".gerenteForm").style.display = "none"
    document.querySelector(".devForm").style.display = "none"

    document.querySelector(".compartilhadoForm").style.display = "block"   
    document.querySelector(`.${formId}`).style.display = "block"
    
}

//limpa os valores do formulário, chamada quando o formulário é enviado ou é trocado o tipo de funcionário

function limpaValores() {

    let nome = document.getElementById("nomeInput")
    nome.value = ""
    let idade = document.getElementById("idadeInput")
    idade.value = ""
    let cargo = document.getElementById("cargoInput")
    cargo.value = ""
    let departamento = document.getElementById("departamentoInput")
    departamento.value = ""
    let linguagem = document.getElementById("linguagemInput")
    linguagem.value = ""

}

//função que imprime na tela o resultado, seja ele sucesso ou erro

function imprimeResultado() {

    let listaErros = document.getElementById("subtituloResultado")
    while (listaErros.firstChild) {
        listaErros.removeChild(listaErros.firstChild);
    }

    novoFuncionario((erros,result) => {

        if(erros){

            let titulo = document.getElementById("tituloResultado")
            titulo.innerText = "Ocorreu um erro:"
           
            for (var i = 0; i < erros.length; i++) {

                var listaItem = document.createElement("li");
                listaItem.innerText = erros[i];
                listaErros.appendChild(listaItem);
            }

        } else {
            
            let titulo = document.getElementById("tituloResultado")
            titulo.innerText = "Funcionário Cadastrado com sucesso!"
    
            let subTitulo = document.getElementById("subtituloResultado")
            subTitulo.innerText = "Aqui estão as informações cadastradas:"
    
            let apresenta = document.getElementById("apresentar")
            apresenta.innerText = result.seApresentar()
        
            let trabalha = document.getElementById("trabalhar")
            trabalha.innerText = result.trabalhar()
        
            let depart = document.getElementById("variavelCargo")
            if (document.getElementsByName("funcionario")[0].checked) {
        
                depart.innerText = result.gerenciar()
        
            } else {
                depart.innerText = result.programar()
            }
        
            
            limpaValores()
        }

        document.querySelector('.resultado').style.display = 'block'
    })
}


// função que cria o funcionário e faz as devidas verificações

function novoFuncionario(callback) {
    let erros= []

    let nome = document.getElementById("nomeInput").value

    if(!nome){
        erros.push(new Error("O campo nome deve ser preenchido"))
    }

    let idade = document.getElementById("idadeInput").value
    if(!idade){
        erros.push(new Error("O campo idade deve ser preenchido"))
    }

    let cargo = document.getElementById("cargoInput").value
    if(!cargo){
        erros.push(new Error("O campo cargo deve ser preenchido"))
    }

    if (document.getElementsByName("funcionario")[0].checked){

        var departamento = document.getElementById("departamentoInput").value
        if(!departamento){
            erros.push(new Error("O campo departamento deve ser preenchido"))
        }

        if (erros.length > 0) {
            callback(erros)
            return
        } else {
            
            callback(null, new Gerente(nome, idade, cargo, departamento))
            return
        }


    } else if (document.getElementsByName("funcionario")[1].checked){
        
        var linguagem = document.getElementById("linguagemInput").value
        if(!linguagem){
            erros.push(new Error("O campo linguagem deve ser preenchido"))
            
        }

        if (erros.length > 0) {
            callback(erros)
            return
        } else {

            callback(null, new Desenvolvedor(nome, idade, cargo, linguagem))
            return
        }

    }

}
