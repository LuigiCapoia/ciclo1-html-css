let quitanda = ["Manga", "Maça", "Banana", "Morango", "Uva"]
let preco = [6.30, 4.33, 3.75, 5.30,7.25]
let carrinhoCompra = []
let total = 0

document.addEventListener('DOMContentLoaded', () => {
    let produtos = document.getElementById("produtos")
    produtos.addEventListener('click', clicando)

})
function clicando(event) {
    let frutas = event.target
    let position = frutas.id
    addCarrinho(position)
    precoTotal(position)
}
function addCarrinho(position) {
    if (carrinhoCompra.includes(position)) {
        alert(`Este item ${quitanda[position]} já está na sua cesta`)
    } else {
        let cesta = document.getElementById("cestaDoCliente").innerHTML
        cesta = cesta + "<li>" + quitanda[position] + "</li>"
        document.getElementById("cestaDoCliente").innerHTML = cesta

        carrinhoCompra.push(position)
    }

}

function precoTotal(position){ 
    let carrinho = document.getElementById("mostraTotalCompra").innerHTML
    total = total + preco[position]
    carrinho = `R$ ${total.toFixed(2)}`
    document.getElementById("mostraTotalCompra").value = carrinho
}