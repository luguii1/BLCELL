const barras = document.querySelector(".barras")
const menu = document.querySelector(".mobile-menu")
const icone = document.getElementById("barrinhas")

barras.addEventListener("click", () => {
    menu.classList.toggle("ativo")
    icone.classList.toggle("fa-xmark")
})


function indisponivel() {
    window.alert('Produto indisponivel. Produto disponivel: Iphone 15')
}