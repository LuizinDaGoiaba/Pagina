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
    var contadorElemento1 = document.getElementById('contador');
    var segundos1 = 23;

    setInterval(function() {
        segundos1++;
        contadorElemento1.innerHTML = segundos1;
    }, 1000);
});

function analisarDados() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var numeroCalcado = parseInt(document.getElementById("calcado").value);
    var mensagem1 = document.getElementById("mensagem");

    if (idade === numeroCalcado) {
        mensagem1.innerHTML = nome + ", sua idade e seu número são iguais.";
    } else if (idade > numeroCalcado) {
        mensagem1.innerHTML = "Sua idade é maior que o número, oloko, " + nome + "!";
    } else {
        mensagem1.innerHTML = "Que pézão em é doido, " + nome + "!";
    }
}

function java(){
    var n1 = parseInt(prompt('Informe o primeiro valor'));
    var n2 = parseInt(prompt('Informe o segundo valor'));
    var n3 = parseInt(prompt('Informe o terceiro valor'));
    var n4 = parseInt(prompt('Informe o quarto valor'));

    alert((n1+n2+n3+n4)/4)
}

function java2(){
    var aplic = parseInt(prompt('Informe o saldo'));
    alert(aplic+(aplic*0.02));
}

function java3(){
    var seg = parseInt(prompt('Informe os segundos'));
    alert(parseInt(seg/60)+ " minutos e " + (seg % 60) + " segundos" );
}

function java4(){
    var min = parseInt(prompt('Informe os minutos'));
    document.write("<h1> Tem " + (min/60)/24 + "dia, " + parseInt(min/60) + "horas e " + (min%60) + " minutos</h1>" );
}

function java5(){
    var hora = parseInt(prompt('Informe as horas'));
    var min = parseInt(prompt('Informe os minutos'));
    document.write("<h1>" + (hora*60+min) + " minutos</h1>" );
}

function java6(){
    var raio = parseInt(prompt('Informe o raio'));
    document.write("<h1>A circunferência é de" + (2*3.14*raio) + "</h1>" );
}

function java7(){
    var polegada = parseInt(prompt('Informe a polegada'));
    document.write("<h1>Em milimetro é: " + (polegada*25.4) + "</h1>" );
}

butao.onclick = function(){
    if(parseFloat(num1.value) > parseFloat(num2.value)){
         result.innerHTML = "O maior valor é o primeiro";
    }else if(parseFloat(num2.value) > parseFloat(num1.value)){
         result.innerHTML = "O maior valor é o segundo";
    }else{
         result.innerHTML = "Os valores são iguais";
    }
}

botao2.onclick = function(){
    if(parseFloat(num3.value)>=100 && parseFloat(num3.value)<1000){
         result2.innerHTML = "O número está na faixa de 100 e 1000";
    }else{
         result2.innerHTML = "O número não está na faixa de 100 e 1000";
    };
    };

    botao3.onclick = function(){
        if(parseFloat(num4.value) % 5 === 0){
             result3.innerHTML = "Esse número é divisivel por 5";
        }else{
             result3.innerHTML = "Esse número não é divisivel por 5";
        };
    };

    botao4.onclick = function(){
        if((parseFloat(num5.value) < Math.pow(parseFloat(num5.value, 2))/(parseFloat(num5.value)*2))){
             result4.innerHTML = "SIM";
        }else{
             result4.innerHTML = "NÃO";
        };
    };

function java8(){
        var numero9 = parseInt(prompt("Digite um número maior que 0:"));

if (numero9 > 0) {
    var soma2 = 0;
    for (var i = 1; i < numero9; i++) {
    soma2 += i;
    }
    console.log("A soma de todos os números menores que " + numero9 + " é: " + soma2);

} else {
    console.log("O número digitado não é válido. Por favor, digite um número maior que 0.");
    };
};

function java9(){
    var alturaA = 1.5;

var alturaB = 1.1;

var cresciA = 0.02;

var cresciB = 0.03;

var anos = 0;



while (alturaB <= alturaA) {

    alturaA += cresciA;

    alturaB += cresciB;

    anos++;

}

console.log("Para que o B passe o A é preciso de " + anos + " anos.");
}

function java10(){
    var x = parseInt(prompt("Informe o valor de X:"));
    var y = parseInt(prompt("Informe o valor de Y:"));

    if (x <= y) {
        var soma = 0;
        for (var i = x; i <= y; i++) {
            if (i > 0) {
            soma += i;
            }
        }
        console.log("A soma dos números positivos de " + x + " a " + y + " é: " + soma);

    } else {
        console.log("Digite um valor de X menor ou igual a Y, esse valor não pode");
    };
}

function calcularCubo() {
    var numero6 = document.getElementById("num6").value;
    var cubo = numero6 * numero6 * numero6;
    document.getElementById("result5").innerHTML = "O cubo do número é: " + cubo;
}

function verificarMaiorNumero() {
    var num7 = parseFloat(document.getElementById("num7").value);
    var num8 = parseFloat(document.getElementById("num8").value);
    var num9 = parseFloat(document.getElementById("num9").value);

    var maiorNumero = Math.max(num7, num8, num9);

    document.getElementById("result9").innerHTML = "O maior número digitado foi: " + maiorNumero;
  }

  function converterTexto() {
    var inputTexto = document.getElementById("texto1");
    var spanContador = document.getElementById("contador1");

    var texto = inputTexto.value;
    var textoMaiusculo = texto.toUpperCase();

    inputTexto.value = textoMaiusculo;

    var quantidadeCaracteres = texto.length;
    spanContador.textContent = "Quantidade de caracteres: " + quantidadeCaracteres;
  }

  function verificar2() {
    var nome = document.getElementById("nome2").value;
    var sexo = document.getElementById("sexo2").value;
    var idade = document.getElementById("idade2").value;

    var resultad = document.getElementById("resultado2");
    resultad.innerHTML = nome + ": ";

    if (sexo === "Feminino" && idade < 25) {
        resultad.innerHTML += "ACEITA";
    } else {
        resultad.innerHTML += "NÃO ACEITA";
    }
}

function limpar2() {
    document.getElementById("nome2").value = "";
    document.getElementById("sexo2").selectedIndex = 0;
    document.getElementById("idade2").value = "";
    document.getElementById("resultado2").innerHTML = "";
}