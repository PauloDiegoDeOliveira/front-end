const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
var requisicaoProduto;
var elementoCardContainer;
var index = 1;
var totalPaginas;
var buscar = document.getElementById("buscar");

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
    elementoCardContainer = document.getElementById("CardContainerId");
    elementoCardContainer.innerHTML = "";
    resultado.forEach(element => {
        elementoCardContainer.innerHTML += `<li class="card">
        <img class="img-produto" src="${element.caminhoAbsoluto}" alt="">
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
    GetBuscarProdutos(buscar.value)
    console.log(buscar.value);
})

async function GetBuscarProdutos(params) {
    requisicaoProduto = await GetData(`produtos?NumeroPagina=${index}&ResultadosExibidos=6&PalavraChave=${params}`);
    totalPaginas = requisicaoProduto.resultado.dados.totalPaginas;
    let listaProdutos = requisicaoProduto.resultado.pagina;
    console.log(listaProdutos);
    GeradorCard(listaProdutos);
}






