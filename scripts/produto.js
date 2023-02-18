fetch('https://vitrineapi.fickert.cloud/v1/produtos')
    .then(response => response.json())
    .then(data => console.log(data));

const tbody = document.querySelector('#produtos');

data.forEach(produto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${produto.nome}</td>
                    <td>${produto.valor}</td>
                    <td>${produto.descricao}</td>`;
    tbody.appendChild(tr);
});

