const titanioNatural = {
    nome: "Titânio Natural",
    nomePastaImagens: "imagem-titanio-natural"
}

const titanioAzul = {
    nome: "Titânio Azul",
    nomePastaImagens: "imagem-titanio-azul"
}
const titanioPreto = {
    nome: "Titânio Preto",
    nomePastaImagens: "imagem-titanio-preto"
}
const titanioBranco = {
    nome: "Titânio Branco",
    nomePastaImagens: "imagem-titanio-branco"
}

const opcoesCores = [titanioNatural, titanioAzul, titanioPreto, titanioBranco]
const opcaoArmazenamento = ["256gb", "512gb"]

const tituloProduto = document.getElementById("titulo")
const imagemVisualizacao = document.getElementById("imagem-visualizacao")
const nomeCorSelecionada = document.getElementById("subtitulo-cor")
const opcaoImagem0 = document.getElementById("0-imagem-miniatura")
const opcaoImagem1 = document.getElementById("1-imagem-miniatura")
const opcaoImagem2 = document.getElementById("2-imagem-miniatura")


function atualizarArmazenamento() {
    const opcaoArmazenamentoSelecionado = document.querySelector('[name="opcao-armazenamento"]:checked').id.charAt(0);
    armazenamentoSelecionado = opcaoArmazenamentoSelecionado;
    tituloProduto.innerText = "Comprar Iphone 15 pro max da cor " + opcoesCores[corSelecionada].nome + " com "  + opcaoArmazenamento[armazenamentoSelecionado] + " de armazenamento."
}

let imagemSelecionada = 0
let corSelecionada = 0
let armazenamentoSelecionado = 0

function atualizarImagemSelecionada() {
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0)
    imagemSelecionada = opcaoImagemSelecionada
    imagemVisualizacao.src = "../Imagens/" + opcoesCores[corSelecionada].nomePastaImagens + "/imagem-" + imagemSelecionada + ".jpg"
}

function atualizarCorSelecionada() {
    const numeroCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0)
    corSelecionada = numeroCorSelecionada
    tituloProduto.innerText = "Comprar Iphone 15 pro max da cor " + opcoesCores[corSelecionada].nome + " com "  + opcaoArmazenamento[armazenamentoSelecionado] + " de armazenamento."

    opcaoImagem0.src = "../Imagens/" + opcoesCores[corSelecionada].nomePastaImagens + "/imagem-0.jpg"
    opcaoImagem1.src = "../Imagens/" + opcoesCores[corSelecionada].nomePastaImagens + "/imagem-1.jpg"
    opcaoImagem2.src = "../Imagens/" + opcoesCores[corSelecionada].nomePastaImagens + "/imagem-2.jpg"
    imagemVisualizacao.src = "../Imagens/" + opcoesCores[corSelecionada].nomePastaImagens + "/imagem-" + imagemSelecionada + ".jpg"
    nomeCorSelecionada.innerText = "Cor - " + opcoesCores[corSelecionada].nome
}

