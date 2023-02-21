const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
var requisicaoProduto;
var elementoCardContainer;
var index = 1;
var totalPaginas;
var buscar = document.getElementById("buscar");
var elementoCardContainer = document.getElementById("CardContainerId");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

GetProdutos();

async function GetProdutos() {
    requisicaoProduto = await GetData(`produtos?NumeroPagina=${index}&ResultadosExibidos=6`);
    totalPaginas = requisicaoProduto.resultado.dados.totalPaginas;
    let listaProdutos = requisicaoProduto.resultado.pagina;
    console.log(listaProdutos);
    GeradorCard(listaProdutos);
}

function GeradorCard(resultado) {
    // elementoCardContainer = document.getElementById("CardContainerId");
    elementoCardContainer.innerHTML = "";
    resultado.forEach(element => {
        elementoCardContainer.innerHTML += `<li class="card">
        <img class="img-produto" src="${element.uploads[0].caminhoAbsoluto}" alt="">
        <div class="card__textos">
            <h2 class="titulo-produto">${element.nome}</h2>
            <p class="descricao-produto">${element.descricao}</p>
            <p class="quantidade-produto">Quantidade: ${element.quantidade}</p>
            <p class="valor-produto">Valor: ${element.valor}</p>
        </div>
    </li>`
    });
}

buscar.addEventListener("keyup", function () {
    elementoCardContainer.innerHTML = "";
    GetBuscarProdutos(buscar.value)
    console.log(buscar.value);
})

async function GetBuscarProdutos(params) {
    requisicaoProduto = await GetData(`produtos?NumeroPagina=${index}&ResultadosExibidos=6&PalavraChave=${params}`);
    console.log(requisicaoProduto);
    elementoCardContainer.innerHTML = "";
    if (!requisicaoProduto.sucesso) {
        elementoCardContainer.innerHTML += `<h2 class="mensagem-erro-buscar">${requisicaoProduto.erros[0]}</h2>`
        // elementoCardContainer.innerHTML = requisicaoProduto.erros[0];
    }
    totalPaginas = requisicaoProduto.resultado.dados.totalPaginas;
    let listaProdutos = requisicaoProduto.resultado.pagina;
    console.log(listaProdutos);
    GeradorCard(listaProdutos);
}

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('cadastrarProduto')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)






