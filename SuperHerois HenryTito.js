
const personagem1 = {
    nome: "Wade Wilson",
    codinome: "DeadPool",
    armaPrincipal: "Katana e armas",
    armaSecundaria: "Super regeneração",
    velocidade: 90,
    força: 75.6,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}

const personagem2 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armaduras (mark I etc.)",
    armaSecundaria: "Rico, playboy, milionário, gênio etc",
    velocidade: 93,
    força: 71.6,
    resistencia: 82,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}

const personagem3 = {
    nome: "Mística",
    codinome: "Mística",
    armaPrincipal: "Morfar",
    armaSecundaria: "",
    velocidade: 100,
    força: 82.6,
    resistencia: 65,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}

const personagem4 = {
    nome: "Miles Morales",
    codinome: "Homem Aranha",
    armaPrincipal: "Lançar teias",
    armaSecundaria: "Super força, sentidos aguçados etc",
    velocidade: 98,
    força: 20,
    resistencia: 30,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}

const personagem5 = {
    nome: "Dormammu",
    codinome: "O barganhador",
    armaPrincipal: "Muito foda no geral",
    armaSecundaria: "Raios de energia",
    velocidade: 93,
    força: 71.6,
    resistencia: 10000,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}

const personagem6 = {
    nome: "One Above All",
    codinome: "One Above All",
    armaPrincipal: "Solar o multiverso marvel ou criar",
    armaSecundaria: "Não sei",
    velocidade: 50,
    força: 80,
    resistencia: 900,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}

const personagem7 = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo de vibrânio",
    armaSecundaria: "Soro SuperSoldado (mais força etc)",
    velocidade: 93,
    força: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}

const personagem8 = {
    nome: "T'Challa",
    codinome: "Pantera Negra",
    armaPrincipal: "Garras",
    armaSecundaria: "SuperForça e velocidade",
    velocidade: 100,
    força: 100,
    resistencia: 82,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundária: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.força + "\n" +
        "Resistencia: " + this.resistencia
    }
}




const listas = [personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7, personagem8]


for (let i = 0; i < listas.length; i++) {
    const atual = listas[i];
    
    for (let j = 0; j < listas.length; j++) {
        if (i === j) continue;


        

        const comparado = listas[j];

        
        console.log(atual.descricao());
        console.log("vs");
        console.log(comparado.descricao());

        if (atual.força > comparado.força) {
            console.log(`${atual.nome} Da um sacode ${comparado.nome}`);
        } else if (atual.força < comparado.força) {
            console.log(`${atual.nome} Toma um sacode ${comparado.nome}`);
        }

        if (atual.velocidade > comparado.velocidade) {
            console.log(`O ${atual.nome} Deixa comendo poeira o  ${comparado.nome}`);
        } else if (atual.velocidade < comparado.velocidade) {
            console.log(`O ${atual.nome} Toma um sacode do ${comparado.nome}`);


        }

        if (atual.resistencia > comparado.resistencia) {
            console.log(`${atual.nome} é mais resistente que ${comparado.nome}`);
        } else if (atual.resistencia < comparado.resistencia) {
            console.log(`${atual.nome} é menos resistente que ${comparado.nome}`);
        }
    }
}

//Menção honrosa: Capitão São José, o GOAT. Sola todos ai.






