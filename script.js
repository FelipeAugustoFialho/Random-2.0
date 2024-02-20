const sortear = document.querySelector('button');
const imagem = document.querySelector('.foto');
const resultadoNaTela = document.querySelector('.resultado-tela');
const input = document.querySelector('.input');

function gerarNumero() {
    const numeroMinimo = Math.ceil(document.querySelector('.min').value)
    const numeroMaximo = Math.floor(document.querySelector('.max').value)

    const resultado = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;

    imagem.style.display = 'none';
    resultadoNaTela.innerHTML = resultado.toLocaleString('pt-BR');

}



sortear.addEventListener('click', gerarNumero);



