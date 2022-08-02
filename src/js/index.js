//1- PEGAR O ELEMENTO HTML DA SETA AVANÇAR
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
//3- FAZER APARECER O PRÓXIMO CARTÃO DA LI (LISTA)
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
//4- BUSCAR O CARTÃO QUE ESTÁ SELECIONADO E ESCONDER
const cartaoSelecionado = document.querySelector (".selecionado");
cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

//2- IDENTIFICAR O CLIQUE DO USUÁRIO
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});



btnVoltar.addEventListener("click", function () {
   if (cartaoAtual === 0) return;

   esconderCartaoSelecionado();
    
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});