const validaCEP = (cep) => cep.toString().length == 8;

const buscaCEP = async () => {
    LimpaEndereco();
    let validacao = true;
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validaCEP(cep)) {
        const data = await fetch(url);
        const endereco = await data.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('erroCEP').style.display = 'block';
            document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
            validacao = false;
        } else {
            document.getElementById('erroCEP').style.display = 'none';
            document.getElementById('erroBlocoCEP').style.border = 'none';
            completaEndereco(endereco);
            validacao = true;
        }
    } else {
        document.getElementById('erroCEP').style.display = 'block';
        document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
        validacao = false;
    }
    return validacao;
}

document.getElementById('cep').addEventListener('focusout', buscaCEP);

const completaEndereco = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const LimpaEndereco = () => {
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

// no html
// <div id="erroBlocoCEP">
// <label>CEP </label><span class="preenchimentoObrigatorio">*</span><br>
// <input name="cep" id="cep" type="number" min="8" placeholder="apenas números" class="invalidInput"
//     required><br>
// <span id="erroCEP" style="display: none;" role="alert">CEP inválido</span>
// </div>
// <div>