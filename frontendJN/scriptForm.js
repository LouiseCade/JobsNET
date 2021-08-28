const Formulario = () => {
    let form = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        cpf: document.getElementById('cpf_digitado').value,
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
    };

    console.log(form);
    return form
}

const criarCandidato = async (candidato) => {
    try {
        const usuario = fetch('http://localhost:5000/docs', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Formulario())
        });
        if (usuario.status === 200) {
            alert('DEU CERTO')
        }
    } catch (error) {
        alert('deu errado!');
    }
}
