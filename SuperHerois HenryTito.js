


const personagem1 = {
    nome: "Wade Wilson",
    codinome: "DeadPool",
    armaPrincipal: "Katana e armas",
    armaSecundaria: "Super regeneração",
    velocidade: 90,
    força: 75.6,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia



    }


}
personagem1.descricao();




const personagem2 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "Rico, playboy, milionário, gênio etc",
    velocidade: 93,
    força: 71.6,
    resistencia: 82,
    descricao: function(){
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia
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
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia
    }



}


const personagem4 = {
    nome: "Miles morales",
    codinome: "Homem Aranha",
    armaPrincipal: "Lançar teias",
    armaSecundaria: "Super teia",
    velocidade: 98,
    força: 20,
    resistencia: 30,
    descricao: function(){
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia
    }



}

const personagem5 = {
    nome: "Dormamo",
    codinome: "O barganhador",
    armaPrincipal: "Muito foda no geral",
    armaSecundaria: "Destruir galáxias",
    velocidade: 93,
    força: 71.6,
    resistencia: 10000,
    descricao: function(){
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia
    }



}


const personagem6 = {
    nome: "One above all",
    codinome: "One above all",
    armaPrincipal: "Solar o multiverso marvel",
    armaSecundaria: "Não sei",
    velocidade: 50,
    força: 80,
    resistencia: 900,
    descricao: function(){
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia
    }



}


const personagem7 = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo de vibrânio",
    armaSecundaria: "SuperSoldado experimento x",
    velocidade: 93,
    força: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia
    }



}

const personagem8 = {
    nome: "Tchala",
    codinome: "Pantera Negra",
    armaPrincipal: "Garras",
    armaSecundaria: "SuperForça e velocidade",
    velocidade: 100,
    força: 100,
    resistencia: 82,
    descricao: function(){
        return "Nome do personagem: " + this.nome + 
        "Codinome" + this.codinome + 
        "Arma Principal" + this.armaPrincipal + 
        "Arma Secundária" + this.armaSecundaria + 
        "Velocidade" + this.velocidade + 
        "Força" + this.força + 
        "Resistencia" + this.resistencia
    }



}


const listas = [personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7, personagem8]


for (let i = 0; i < listas.length; i++) {
    const atual = listas[i];
    
    for (let j = 0; j < listas.length; j++) {
        if (i === j) continue;

        const comparado = listas[j];

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





/*
    Deve estar certo

*/





