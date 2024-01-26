let listNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = numeroAleatorio();
let cont = 1;

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listNumerosSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite){
        listNumerosSorteados = [];
    }

    if(listNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio;
    }else{
        listNumerosSorteados.push(numeroEscolhido);
        console.log(listNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsivevoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}.`);
}

mensagemInicial();

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limpaCampo();
    cont = 1;
    mensagemInicial();
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabens você acertou !');
        let palavraTentativa = cont > 1 ? 'tentativas' : 'tentativa' ;
        let mensagensTentativas = `Você descobriu o número secreto com ${cont} ${palavraTentativa} .`
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if( chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Que pena, você errou !');
        exibirTextoNaTela('p', `O número secreto e menor que ${chute}.`);
    }else if(chute < numeroSecreto){
        exibirTextoNaTela('h1', 'Que pena, você errou !');
        exibirTextoNaTela('p', `O número secreto e maior que ${chute}.`);
    }
    cont++;
    limpaCampo();

}

