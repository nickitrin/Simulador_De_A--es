import {acoes} from './acoes.js';

let acoesdisponiveisparacompra = document.getElementById("acoesdisponiveisparacompra")
let portfoliodeacoes= document.getElementById("portfoliodeacoes")

function CarregarAcoes() {

    for(let i=0; i<acoes.length; i++){
        let acaodisponivel = document.createElement("div")
        acaodisponivel.setAttribute('id', 'acao' + i ) 
        acaodisponivel.setAttribute('class', 'acaodisponivel')
        acoesdisponiveisparacompra.append(acaodisponivel)

        let acaocodigo = document.createElement("p")
        acaocodigo.textContent = acoes[i]["codigo"]
        acaocodigo.setAttribute('id', acoes[i]["codigo"]) 
        acaocodigo.setAttribute('class', 'acaocodigo')     
        acaocodigo.setAttribute('value', acoes[i]["codigo"])    

        let acaopreco = document.createElement("p")
        acaopreco.textContent = acoes[i]["preco"]
        acaopreco.setAttribute('class', 'acaopreco') 
        acaopreco.setAttribute('value', acoes[i]["preco"])

        let botaocompraracao = document.createElement('button')
        botaocompraracao.setAttribute('type', 'button' )
        botaocompraracao.textContent = 'comprar acao'
        botaocompraracao.addEventListener("click", function (){ ComprarAcao(acaocodigo.id)})      

        
        acaodisponivel.append(acaocodigo)
        acaodisponivel.append(acaopreco)
        acaodisponivel.append(botaocompraracao)
    }
}
CarregarAcoes()

function ComprarAcao(codigodaacao){

    let comprouacao = document.createElement("p")
    comprouacao.textContent = "Voce comprou " + codigodaacao
    portfoliodeacoes.append(comprouacao)

}




