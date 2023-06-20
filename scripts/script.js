function exibirMensagem() {
    var nome = document.getElementById("name").value;
    var mensagem = "Olá, " + nome + ", que vídeos você gostaria de ver?";
    document.getElementById("mensagemSpan").textContent = mensagem;
}

function verificarIdade() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var mensagem = document.getElementById("mensagem");

    if (idade < 18) {
        mensagem.innerHTML = nome + ", você não tem idade mínima para poder ver mais vídeos.";
    } else {
        mensagem.innerHTML = "Infelizmente, " + nome + ", você já viu todo o conteúdo do site.";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    var contadorElemento = document.getElementById('contador');
    var segundos = 23;

    setInterval(function() {
        segundos++;
        contadorElemento.innerHTML = segundos;
    }, 1000);
});

function analisarDados() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var numeroCalcado = parseInt(document.getElementById("calcado").value);
    var mensagem = document.getElementById("mensagem");

    if (idade === numeroCalcado) {
        mensagem.innerHTML = nome + ", sua idade e seu número são iguais.";
    } else if (idade > numeroCalcado) {
        mensagem.innerHTML = "Sua idade é maior que o número, oloko, " + nome + "!";
    } else {
        mensagem.innerHTML = "Que pézão em é doido, " + nome + "!";
    }
}