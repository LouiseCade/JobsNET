const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, require: true },
    email: { type: String, unique: true, require: true },
    senha: { type: String, unique: false, require: true },
    cpf: { type: String, unique: true, require: true },
    dataNascimento: { type: String, unique: false, require: true },
    estadoCivil: { type: String, unique: false, require: true },
    cep: { type: String, unique: false, require: true },
    endereco: { type: String, unique: false, require: true },
    bairro: { type: String, unique: false, require: true },
    complemento: { type: String, unique: false, require: true },
    cidade: { type: String, unique: false, require: true },
    estado: { type: String, unique: false, require: true },
    profissao: { type: String, unique: false, require: true },
    celular: { type:String, unique: false, require: true },
    linkedin: { type: String, unique: false, require: false },

},
    {
        timestamps: true
    });

module.exports = mongoose.model('Candidate', CandidateSchema);
