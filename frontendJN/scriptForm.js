const Formulario = () => {
    let form = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        cpf: document.getElementById('cpf').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        complemento: document.getElementById('complemento').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cargo: document.getElementById('cargo').value,
        celular: document.getElementById('celular').value,
        linkedin: document.getElementById('linkedin').value,
    };

    return form
}

const criarCandidato = async (Candidate) => { 

    const requisicao = await fetch('https://back-gama.herokuapp.com/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
    
    if (requisicao.status == 200) {
        alert('Cadastro concluido com sucesso!');
        window.location.href = 'CadastroSucesso.html';
    }

    if (requisicao.status == 500) {
        alert('CPF/Email já cadastrado, confira seus dados');
    }
}

function preencheCampos(json) {
    document.getElementById('endereco').value = json.logradouro;
    document.getElementById('bairro').value = json.bairro;
    document.getElementById('cidade').value = json.localidade;
    document.getElementById('estado').value = json.uf;

}

function buscaCep() {
    let cep = document.getElementById('cep').value;
    let cepFormatado = cep.replace("-", "");
    cepFormatado = cepFormatado.replace(".", "");
    let url = 'http://viacep.com.br/ws/' + cepFormatado + '/json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status = 200)
                preencheCampos(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();

    Formulario();
}

function ValidaCPF(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    }
    else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }
        
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        //validaçao do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false
        }
      

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
       
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        
        //validaçao do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false
        }

        return true;
    }
}

function validacao() {
    console.log("Iniciando validação CPF");
    document.getElementById('success').style.display = 'none';  
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById("cpf").value;


    var resultadoValidacao = ValidaCPF(cpf);

    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}

function check_form() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let estadoCivil = document.getElementById('estadoCivil').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let bairro = document.getElementById('bairro').value;
    let complemento = document.getElementById('complemento').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cargo = document.getElementById('cargo').value;
    let celular = document.getElementById('celular').value;
    let linkedin = document.getElementById('linkedin').value;

    if (nome == "" || cargo == "" || senha =="" || dataNascimento == "" || estadoCivil == "" || cep == "" || endereco == ""
        || complemento == "" || bairro == "" || cidade == "" || estado == "" ||  cargo == "" || celular == "" || linkedin == "" ||
        email == false) {
        alert('Olá, preencha todos os campos corretamente.');
    } 
    else {
        criarCandidato();
        
    }
}

