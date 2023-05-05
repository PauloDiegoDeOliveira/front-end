var urlApi = "https://vitrineapi.fickert.cloud/v1/";

function GetData(rota) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            resolve(JSON.parse(this.responseText));
        }

        xhttp.onerror = function () {
            reject();
        }

        xhttp.open("Get", urlApi + rota);

        xhttp.send();
    })
}    