const Candidate = require('./Candidate');

debugger;
module.exports = {
    async register(req, res) {
        const { nome, email, senha, cpf, dataNascimento, estadoCivil,
             cep, endereco, bairro, complemento, cidade, estado, profissao, celular, linkedin } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.email = email;
        newCandidate.senha = senha;
        newCandidate.cpf = cpf;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.complemento = complemento;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.profissao = profissao;
        newCandidate.celular = celular;
        newCandidate.linkedin = linkedin;


        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            console.log(savedCandidate);
            return res.status(200).send(savedCandidate);
        });
    }
}