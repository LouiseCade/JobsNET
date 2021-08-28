const cors = require('cors');

function preencheCampos(json) {
    document.getElementById('endereco').value = json.logradouro;
    document.getElementById('bairro').value = json.bairro;
    document.getElementById('cidade').value = json.localidade;
    document.getElementById('estado').value = json.uf;

}


function buscaCep() {
    let cep = document.getElementById('cep')
    let url = 'http://viacep.com.br/ws/' + cep + '/json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status = 200)
                preencheCampos(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}

app.use(cors());
