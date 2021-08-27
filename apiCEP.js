
const limpa_formulário_cep = () => {
    document.getElementById('endereco').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('estado').value = ("");

}
const preencherFormulario = (conteudo) => {
    if (!("erro" in conteudo)) {
        document.getElementById('endereco').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);

    }
    else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limpa_formulário_cep();
    
    const cep = document.getElementById('cep').value;
    const url = 'https://viacep.com.br/ws/' + cep + '/json';
    
        if (cepValido(cep)){
            const dados = await fetch(url);
            const conteudo = await dados.json();
            if (conteudo.hasOwnProperty('erro')){
                document.getElementById('endereco').value = 'CEP não encontrado!';
            }
            else {
                preencherFormulario(conteudo);
        }
    }
    else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
}


document.getElementById('cep')
    .addEventListener('focusout',pesquisarCep);




